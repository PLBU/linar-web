import { type Component } from 'solid-js';

import styles from './ProjectCard.module.css';
import Image from '../image/Image';
import PbImageGroup from '../pb-image-group/PbImageGroup';

const ProjectCard: Component<{ project: Project }> = (props) => {
    return (
        <div class={styles.container}>
            <PbImageGroup project={props.project} />
        </div>
    )
}

export default ProjectCard