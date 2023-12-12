import { onCleanup, onMount, type Component, createSignal } from 'solid-js';

import HomePage from './pages/home/home';
import ProjectsPage from './pages/projects/projects';
import DevelopmentPage from './pages/development/development';
import Footer from './components/footer/Footer';
import HomeMobilePage from './pages/home/mobile/home-mobile';
import ProjectsMobilePage from './pages/projects/mobile/projects-mobile';
import DesktopScreen from './screens/DesktopScreen';

const App: Component = () => {
  const [width, setWidth] = createSignal(window.innerWidth);

  const resizeListener = (e: Event) => {
    setWidth(window.innerWidth);
  };

  onMount(() => {
    window.addEventListener('resize', resizeListener);
  });

  onCleanup(() => {
    window.removeEventListener('resize', resizeListener);
  });

  return (
    <div class='page'>
      {width() < 200
        ? <DevelopmentPage />
        : width() < 768 
        ? <>
          <HomeMobilePage />
          <ProjectsMobilePage />
        </>
        : <>
          <DesktopScreen />
        </>
      }
    </div>
  );
};

export default App;