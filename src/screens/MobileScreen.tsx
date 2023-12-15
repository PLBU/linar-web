import { createSignal, type Component, createEffect, onCleanup, onMount } from "solid-js";
import { createScrollPosition } from "@solid-primitives/scroll";
import HomeMobilePage from "../pages/home/mobile/home-mobile";
import ProjectsMobilePage from "../pages/projects/mobile/projects-mobile";

const pages = [
    <HomeMobilePage />,
    <ProjectsMobilePage />
]

const MobileScreen: Component = () => {
    const [index, setIndex] = createSignal(0)
    const [isIndexChanging, setIsIndexChanging] = createSignal(false)
    const [startY, setStartY] = createSignal(0)

    const windowScroll = createScrollPosition();


    const onTouchStart = (event: TouchEvent) => {
        setStartY(event.changedTouches[0].clientY)
    }

    const onTouchEnd = (event: TouchEvent) => {
        const deltaY = event.changedTouches[0].clientY - startY()

        if (deltaY > 0) {
            if (!isIndexChanging() && index() - 1 >= 0 && windowScroll.y == 0) {
                event.preventDefault()
                setIsIndexChanging(true)
                setTimeout(() => {
                    setIndex(prev => prev - 1)
                    setIsIndexChanging(false)
                }, 250);
            }
        } else if (deltaY < 0) {
            if (!isIndexChanging() && index() + 1 < pages.length) {
                event.preventDefault()
                setIsIndexChanging(true)
                setTimeout(() => {
                    setIndex(prev => prev + 1)
                    setIsIndexChanging(false)
                }, 250);
            }
        }
    }

    return (
        <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} class={isIndexChanging() ? "fade-in" : "fade-in-active"}>
            {pages[index()]}
        </div>
    )
}

export default MobileScreen