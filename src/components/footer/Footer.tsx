import { type Component } from 'solid-js';

import styles from './Footer.module.css';
import Title from '../title/Title';

const Footer: Component = () => {
    return (
        <div class={styles.container}>
            <Title isLight={true} textBefore="Let's " highlight='Connect' />
            <div>
                <a href={'https://mail.google.com/mail/?view=cm&fs=1&to=renaldi.linar@gmail.com'} target='_blank' class={`p2 ${styles.description}`}>E-Mail: renaldi@linar.my.id | </a>
                <a href={'https://www.instagram.com/renaldiarlin/'} target='_blank' class={`p2 ${styles.description}`}>IG: renaldiarlin | </a>
                <a href={'https://www.linkedin.com/in/renaldi-arlin/'} target='_blank' class={`p2 ${styles.description}`}>LinkedIn: Renaldi Arlin</a>
            </div>
            <div class={`chip ${styles.credit}`}>&copy Renaldi Arlin 2023 | Made with ❤️ using Solid JS</div>
        </div>
    )
}

export default Footer