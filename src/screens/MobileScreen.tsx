import { createSignal, type Component, createEffect, onCleanup, onMount } from "solid-js";
import { createScrollPosition } from "@solid-primitives/scroll";
import HomeMobilePage from "../pages/home/mobile/home-mobile";
import ProjectsMobilePage from "../pages/projects/mobile/projects-mobile";
import Hammer from 'hammerjs';

const pages = [
    <HomeMobilePage />,
    <ProjectsMobilePage />
]

const MobileScreen: Component = () => {
    const [index, setIndex] = createSignal(0)
    const [isIndexChanging, setIsIndexChanging] = createSignal(false)
    const [swipeContainer, setSwipeContainer] = createSignal<HTMLDivElement | null>(null)

    const windowScroll = createScrollPosition();

    createEffect(() => {
        const container = swipeContainer()
        console.log("container")
        if (container) {
            const hammer = new Hammer(container)
            console.log("container init")

            hammer.on("swipeup", () => {
                console.log("swiped up")
                if (!isIndexChanging && index() + 1 < pages.length) {
                    setIsIndexChanging(true)
                    setTimeout(() => {
                        setIndex(prev => prev + 1)
                        setIsIndexChanging(false)
                    }, 250);
                }
            })

            hammer.on("swipedown", () => {
                if (!isIndexChanging() && index() - 1 >= 0 && windowScroll.y == 0) {
                    setIsIndexChanging(true)
                    setTimeout(() => {
                        setIndex(prev => prev - 1)
                        setIsIndexChanging(false)
                    }, 250);
                }
            })
        }
    })

    onCleanup(() => {
        setSwipeContainer(null)
    })

    return (
        <div ref={setSwipeContainer} class={isIndexChanging() ? "fade-in" : "fade-in-active"}>
            {pages[index()]}
        </div>
    )
}

export default MobileScreen