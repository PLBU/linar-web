import { createEffect, type Component, createSignal } from 'solid-js';

import Chip from './components/chip/Chip';
import ChipGroup from './components/chip-group/ChipGroup';
import Title from './components/title/Title';

import pb from './service';
import PbImage from './components/pb-image/PbImage';
import HomePage from './pages/home/home';
import ProjectsPage from './pages/projects/projects';

const App: Component = () => {

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
      <ProjectsPage />
    </div>
  );
};

export default App;
