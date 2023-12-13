import { onCleanup, onMount, createSignal, type Component, createEffect } from "solid-js";
import { createScrollPosition } from "@solid-primitives/scroll";
import HomePage from "../pages/home/home";
import ProjectsPage from "../pages/projects/projects";

const pages = [
    <HomePage />,
    <ProjectsPage />
]

const DesktopScreen: Component = () => {
    const [index, setIndex] = createSignal(0)
    const [isIndexChanging, setIsIndexChanging] = createSignal(false)

    const windowScroll = createScrollPosition();

    const wheelListener = (e: WheelEvent) => {
        if (e.deltaY > 0 && !isIndexChanging() && windowScroll.y == 0) {
            // Down
            if (index() + 1 < pages.length) {
                setIndex(prev => prev + 1)
                setIsIndexChanging(true)
                setTimeout(() => {
                    setIsIndexChanging(false)
                }, 200);
            }
        } else if (e.deltaY < 0 && !isIndexChanging()) {
            // Up
            if (index() - 1 >= 0) {
                setIndex(prev => prev - 1)
                setIsIndexChanging(true)
                setTimeout(() => {
                    setIsIndexChanging(false)
                }, 200);
            }
        }
    }

    createEffect(() => {
        
    })

    onMount(() => {
        window.addEventListener('wheel', wheelListener);
    });

    onCleanup(() => {
        window.removeEventListener('wheel', wheelListener);
    });

    return (
        <div>
            {pages[index()]}
        </div>
    )
}

export default DesktopScreen