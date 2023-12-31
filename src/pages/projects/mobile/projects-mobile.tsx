import { createSignal, type Component, createEffect } from 'solid-js';

import Title from '../../../components/title/Title';

import styles from './projects-mobile.module.css';
import pb from '../../../service';

import arrow from '../../../assets/icons/arrow.svg'
import ProjectVerticalCard from '../../../components/project-vertical-card/ProjectVerticalCard';
import FooterMobile from '../../../components/footer/mobile/FooterMobile';

const ProjectsMobilePage: Component<{projects: Project[]}> = (props) => {
    const [idx, setIdx] = createSignal<number>(0)

    return (
        <div class={styles.container}>
            <div class={styles.innerContainer}>
                <Title textBefore='Some of my ' highlight='Projects' />
                <div class={styles.buttons}>
                    {idx() > 0 ? <img class={styles.left} src={arrow} onClick={() => setIdx(idx() - 1)}/> : null}
                    {idx() < props.projects.length - 1 ? <img class={styles.right} src={arrow} onClick={() => setIdx(idx() + 1)}/> : null}
                </div>
                <div class={styles.projectsContainer}>
                    <ProjectVerticalCard project={props.projects[idx()]} />
                </div>
            </div>
            <FooterMobile />
        </div>
    )
}

export default ProjectsMobilePage