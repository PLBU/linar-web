import { type Component } from 'solid-js';

import styles from './Image.module.css';

const Image: Component<{
    imgPath: string,
}> = (props) => {
    return (
        <img class={styles.container} src={props.imgPath} />
    )
}

export default Image