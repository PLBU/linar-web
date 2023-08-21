import { createSignal, type Component, createEffect } from 'solid-js';

import Title from '../../components/title/Title';

import styles from './projects.module.css';
import ProjectCard from '../../components/project-card/ProjectCard';
import pb from '../../service';

const ProjectsPage: Component = () => {
    const [projects, setProjects] = createSignal<Project[]>([])
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
            <div class={styles.projectsContainer}>
                <ProjectCard project={projects()[0]} />
            </div>
        </div>
    )
}

export default ProjectsPage