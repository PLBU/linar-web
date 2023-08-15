import { type Component } from 'solid-js';

import pb from '../../service';

import styles from './PbImage.module.css';

const PbImage: Component<{ 
    record: any, 
    imgPath: string, 
    width: number, 
    height: number 
}> = (props) => {
    const url = pb.getFileUrl(props.record, props.imgPath)

    return (
        <img class={styles.container} src={url} width={props.width} height={props.height}/>
    )
}

export default PbImage