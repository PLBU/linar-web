import { type Component } from 'solid-js';

import styles from './development.module.css';

const DevelopmentPage: Component = () => {
    return (
        <div class={styles.container}>
            <h4>Site's still in development ...</h4>
            <p class='p2'>Try it on your Computer or a bigger browser</p>
        </div>
    )
}

export default DevelopmentPage