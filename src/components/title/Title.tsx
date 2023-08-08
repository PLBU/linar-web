import { type Component } from 'solid-js';

import styles from './Title.module.css';

const Title: Component<{ textBefore?: string, highlight: string, textAfter?: string }> = (props) => {
    return (
        <>
            <h2 class={styles.normal}>
                {props.textBefore}
            </h2>
            <h2 class={styles.highlight}>
                {props.highlight}
            </h2>
            <h2 class={styles.normal}>
                {props.textAfter}
            </h2>
        </>
    )
}

export default Title