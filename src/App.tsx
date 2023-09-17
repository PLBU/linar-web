import { onMount, type Component, createSignal } from 'solid-js';

import HomePage from './pages/home/home';
import ProjectsPage from './pages/projects/projects';
import DevelopmentPage from './pages/development/development';
import Footer from './components/footer/Footer';

const App: Component = () => {
  const [width, setWidth] = createSignal(window.innerWidth);

  onMount(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  });

  if (width() < 1100) return <DevelopmentPage/>
  return  (
    <div>
      <HomePage />
      <ProjectsPage />
      <Footer />
    </div>
  );
};

export default App;
