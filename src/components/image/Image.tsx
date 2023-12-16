import { createSignal, type Component, createEffect, on } from 'solid-js';

import styles from './Image.module.css';

const Image: Component<{
    imgPath: string,
}> = (props) => {
    const [isLoaded, setIsLoaded] = createSignal(false)

    createEffect(
        on(
            () => props.imgPath,
            () => {
                setIsLoaded(false)
            }
        )
    )

    return (
        <>
            <div class={!isLoaded() ? `${styles.container} chip` : styles.hidden}>Loading ...</div>
            <img 
                class={isLoaded() ? styles.container : styles.hidden} 
                src={props.imgPath} 
                onLoad={() => setIsLoaded(true)} />
        </>
    )
}

export default Image