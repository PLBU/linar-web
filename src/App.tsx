import { onCleanup, onMount, type Component, createSignal } from 'solid-js';

import DevelopmentPage from './pages/development/development';
import DesktopScreen from './screens/DesktopScreen';
import MobileScreen from './screens/MobileScreen';

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
          ? <MobileScreen />
          : <DesktopScreen />
      }
    </div>
  );
};

export default App;