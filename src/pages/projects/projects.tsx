import { createSignal, type Component, createEffect } from 'solid-js';

import Title from '../../components/title/Title';

import styles from './projects.module.css';
import ProjectCard from '../../components/project-card/ProjectCard';

import arrow from '../../assets/icons/arrow.svg'
import Footer from '../../components/footer/Footer';

const ProjectsPage: Component<{projects: Project[]}> = (props) => {
    const [idx, setIdx] = createSignal<number>(0)

    return (
        <>
            <div class={styles.container}>
                <Title textBefore='Some of my ' highlight='Projects' />
                <div class={styles.buttons}>
                    {idx() > 0 ? <img class={styles.left} src={arrow} onClick={() => setIdx(idx() - 1)} /> : null}
                    {idx() < props.projects.length - 1 ? <img class={styles.right} src={arrow} onClick={() => setIdx(idx() + 1)} /> : null}
                </div>
                <div class={styles.projectsContainer}>
                    <ProjectCard project={props.projects[idx()]} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProjectsPage