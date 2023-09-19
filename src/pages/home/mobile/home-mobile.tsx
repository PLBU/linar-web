import { type Component } from 'solid-js';

import me from '../../../assets/images/me-memoji.png'

import styles from './home-mobile.module.css';

const HomeMobilePage: Component = () => {
    return (
        <div class={styles.container}>
            <div class={styles.introContainer}>
                <h1 class={styles.highlight}>Hi, I'm </h1>
                <h1 class={styles.normal}>Renaldi Arlin</h1>
                <p class={`p1 ${styles.description}`}>Fullstack Software Developer</p>
            </div>
            <img class={styles.meImg} src={me} />
        </div>
    )
}

export default HomeMobilePage