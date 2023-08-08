import { createEffect, type Component, createSignal } from 'solid-js';
import PocketBase from 'pocketbase';

import me from './assets/me-memoji.png';
import Chip from './components/chip/Chip';
import ChipGroup from './components/chip-group/ChipGroup';
import Title from './components/title/Title';

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

  const texts = [
    'Minecraft',
    'Maincrafeter',
    'Dota 2',
    'Android',
    'iOS'
  ]

  return (
    <div>
      <img width={160} src={me}/>
      <h1>
        Project Title: {projects().length > 0 ? projects()[0].title : "ikuzo"}
      </h1>
      <Title textBefore='Hello ' highlight='Testo' textAfter=' mainkuraftu asdfasdf asdf ' />
      <ChipGroup texts={texts} />
    </div>
  );
};

export default App;
