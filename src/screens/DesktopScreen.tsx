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
    const [wheelContainer, setWheelContainer] = createSignal<HTMLDivElement | null>(null)

    const windowScroll = createScrollPosition();

    const handleWheel = (e: WheelEvent) => {
        if (e.deltaY > 0 && !isIndexChanging()) {
            // Down
            if (index() + 1 < pages.length) {
                setIsIndexChanging(true)
                setTimeout(() => {
                    setIndex(prev => prev + 1)
                    setIsIndexChanging(false)
                }, 250);
            }
        } else if (e.deltaY < 0 && !isIndexChanging() && windowScroll.y == 0) {
            // Up
            if (index() - 1 >= 0) {
                setIsIndexChanging(true)
                setTimeout(() => {
                    setIndex(prev => prev - 1)
                    setIsIndexChanging(false)
                }, 250);
            }
        }
    }

    onCleanup(() => {
        setWheelContainer(null)
    })

    return (
        <div ref={setWheelContainer} onWheel={handleWheel} class={isIndexChanging() ? "fade-in" : "fade-in-active"}>
            {pages[index()]}
        </div>
    )
}

export default DesktopScreen