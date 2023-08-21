import { createEffect, type Component, createSignal } from 'solid-js';

import Chip from './components/chip/Chip';
import ChipGroup from './components/chip-group/ChipGroup';
import Title from './components/title/Title';

import pb from './service';
import PbImage from './components/pb-image/PbImage';
import HomePage from './pages/home/home';

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
      <HomePage />
    </div>
  );
};

export default App;
