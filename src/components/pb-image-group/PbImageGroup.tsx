import { createSignal, type Component, createEffect } from 'solid-js';

import styles from './PbImageGroup.module.css';
import PbImage from '../pb-image/PbImage';

const PbImageGroup: Component<{
    project: any,
}> = (props) => {
    const [idx, setIdx] = createSignal<number>(0)
    const [imgPath, setImgPath] = createSignal<string>('')

    createEffect(() => {
        setImgPath(props.project.images[idx()])
    }, [idx])

    return (
        <div class={styles.container}>
            {props.project || imgPath() != '' ?
                <>
                    <button 
                        class={`${styles.left} chip`} 
                        disabled={idx() == 0} 
                        onClick={() => setIdx(idx() - 1)}>
                        &lt
                    </button>
                    <PbImage record={props.project} imgPath={imgPath} />
                    <button 
                        class={`${styles.right} chip`} 
                        disabled={idx() == props.project.images.length - 1} 
                        onClick={() => setIdx(idx() + 1)}>
                        &gt
                    </button>
                </>
                : <div class={`${styles.placeholder} chip`}>
                    Loading
                </div>
            }
        </div>
    )
}

export default PbImageGroup