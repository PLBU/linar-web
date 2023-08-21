import { createEffect, type Component, Signal } from 'solid-js';

import pb from '../../service';

import styles from './PbImage.module.css';

const PbImage: Component<{
    record: any,
    imgPath: () => string,
}> = (props) => {
    const getFileUrl = () => pb.getFileUrl(props.record, props.imgPath())

    return (
        <img class={styles.container} src={getFileUrl()} />
    )
}

export default PbImage