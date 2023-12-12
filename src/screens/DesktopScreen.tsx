import { onCleanup, onMount, createSignal, type Component, createEffect } from "solid-js";
import HomePage from "../pages/home/home";
import ProjectsPage from "../pages/projects/projects";

const DesktopScreen: Component = () => {
    const [index, setIndex] = createSignal(0)
    const [isIndexChanging, setIsIndexChanging] = createSignal(false)

    const wheelListener = (e: WheelEvent) => {
        if (e.deltaY > 200 && !isIndexChanging()) {
            // Down
            setIndex(prev => prev + 1)
            setIsIndexChanging(true)
            setTimeout(() => {
                setIsIndexChanging(false)
            }, 500);
        } else if (e.deltaY < -200 && !isIndexChanging()) {
            // Up
            setIndex(prev => prev - 1)
            setIsIndexChanging(true)
            setTimeout(() => {
                setIsIndexChanging(false)
            }, 500);
        }
    }

    createEffect(() => console.log(index()))
    

    onMount(() => {
        window.addEventListener('wheel', wheelListener);
      });
    
    onCleanup(() => {
        window.removeEventListener('wheel', wheelListener);
    });

    return (
        <div>
            <HomePage />
        </div>
    )
}

export default DesktopScreen