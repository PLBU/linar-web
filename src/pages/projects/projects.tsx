import { createSignal, type Component, createEffect } from 'solid-js';

import Title from '../../components/title/Title';

import styles from './projects.module.css';
import ProjectCard from '../../components/project-card/ProjectCard';
import pb from '../../service';

import arrow from '../../assets/icons/arrow.svg'

const ProjectsPage: Component = () => {
    const [projects, setProjects] = createSignal<Project[]>([])
    const [idx, setIdx] = createSignal<number>(0)

    const fetchProjectsRemotely = async () => {
        const records: Project[] = await pb.collection('projects').getFullList({
            sort: '-created',
        });

        setProjects(records)
    }

    createEffect(() => {
        fetchProjectsRemotely()
    })

    return (
        <div class={styles.container}>
            <Title textBefore='Some of my ' highlight='Projects' />
            <div class={styles.buttons}>
                {idx() > 0 ? <img class={styles.left} src={arrow} onClick={() => setIdx(idx() - 1)}/> : null}
                {idx() < projects().length - 1 ? <img class={styles.right} src={arrow} onClick={() => setIdx(idx() + 1)}/> : null}
            </div>
            <div class={styles.projectsContainer}>
                <ProjectCard project={projects()[idx()]} />
            </div>
        </div>
    )
}

export default ProjectsPage