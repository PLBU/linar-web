import { type Component } from 'solid-js';

import PbImageGroup from '../pb-image-group/PbImageGroup';
import ChipGroup from '../chip-group/ChipGroup';

import styles from './ProjectCard.module.css';

const ProjectCard: Component<{ project: Project }> = (props) => {
    return (
        <div class={styles.container}>
            <PbImageGroup project={props.project} />
            <div class={styles.summaryContainer}>
                <div class={styles.titleContainer}>
                    <h3>{props.project ? props.project.title : "Loading ..."}</h3>
                </div>
                <ChipGroup texts={props.project ? props.project.technologies : ['Teching up']} />
                <div class={`p2 ${styles.description}`}>{props.project ? props.project.description : "Waiting description ..."}</div>
            </div>
        </div>
    )
}

export default ProjectCard