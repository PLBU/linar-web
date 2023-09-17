import { type Component } from 'solid-js';

import styles from './Title.module.css';

const Title: Component<{ textBefore?: string, highlight: string, textAfter?: string, isLight?: boolean }> = (props) => {
    return (
        <div class={styles.container}>
            <h2 class={props.isLight ? styles.light : styles.normal}>
                {props.textBefore}
            </h2>
            <h2 class={styles.highlight}>
                {props.highlight}
            </h2>
            <h2 class={props.isLight ? styles.light : styles.normal}>
                {props.textAfter}
            </h2>
        </div>
    )
}

export default Title