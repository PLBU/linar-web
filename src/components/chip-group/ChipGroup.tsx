import { createSignal, type Component, onCleanup } from 'solid-js';

import styles from './ChipGroup.module.css';
import Chip from '../chip/Chip';

const ChipGroup: Component<{ texts: string[] }> = (props) => {
    const [scrollContainer, setScrollContainer] = createSignal<HTMLDivElement | null>(null)

    const handleScroll = (event: WheelEvent) => {
        if (scrollContainer()) {
            scrollContainer()!.scrollLeft += event.deltaY
            event.preventDefault() // Prevent default scrolling behavior
            event.stopPropagation()
        }
    };

    // Cleanup the ref when the component unmounts
    onCleanup(() => {
        setScrollContainer(null)
    });


    return (
        <div ref={setScrollContainer} onWheel={handleScroll} class={styles.container}>
            {props.texts.map(text => <Chip text={text} />)}
        </div>
    )
}

export default ChipGroup