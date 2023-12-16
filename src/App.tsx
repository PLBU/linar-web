import { onCleanup, onMount, type Component, createSignal, createEffect } from 'solid-js';

import DevelopmentPage from './pages/development/development';
import DesktopScreen from './screens/DesktopScreen';
import MobileScreen from './screens/MobileScreen';
import pb from './service';

const App: Component = () => {
  const [width, setWidth] = createSignal(window.innerWidth);
  const [projects, setProjects] = createSignal<Project[]>([])

  const resizeListener = (e: Event) => {
    setWidth(window.innerWidth);
  };

  onMount(() => {
    window.addEventListener('resize', resizeListener);
  });

  onCleanup(() => {
    window.removeEventListener('resize', resizeListener);
  });

  const fetchProjectsRemotely = async () => {
    const records: Project[] = await pb.collection('projects').getFullList({
      sort: 'order_no',
    });

    setProjects(records)
  }

  createEffect(() => {
    fetchProjectsRemotely()
  })

  return (
    <div class='page'>
      {width() < 200
        ? <DevelopmentPage />
        : width() < 768
          ? <MobileScreen projects={projects()} />
          : <DesktopScreen projects={projects()} />
      }
    </div>
  );
};

export default App;