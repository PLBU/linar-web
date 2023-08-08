import { createEffect, type Component, createSignal } from 'solid-js';
import PocketBase from 'pocketbase';

import me from './assets/me-memoji.png';
import Chip from './components/chip/Chip';

const pb = new PocketBase('https://linar-web.fly.dev');

const App: Component = () => {
  const [projects, setProjects] = createSignal<Project[]>([])
  const callApi = async () => {
    const records: Project[] = await pb.collection('projects').getFullList({
      sort: '-created',
    });

    setProjects(records)
  }

  createEffect(() => {
    callApi()
  })

  createEffect(() => {
    console.log(projects())
  }, [projects])

  return (
    <div>
      <img width={160} src={me}/>
      <h1>
        Project Title: {projects().length > 0 ? projects()[0].title : "ikuzo"}
      </h1>
      <Chip text='Minecraft' />
    </div>
  );
};

export default App;
