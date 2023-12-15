import { createSignal, type Component } from 'solid-js';

import styles from './Image.module.css';

const Image: Component<{
    imgPath: string,
}> = (props) => {
    const [isLoaded, setIsLoaded] = createSignal(false)

    return (
        <>
            <div class={ !isLoaded() ? styles.container : styles.hidden}>Loading ...</div>
            <img class={ isLoaded() ? styles.container : styles.hidden} src={props.imgPath} onLoad={() => setIsLoaded(true)} />
        </>
    )
}

export default Image