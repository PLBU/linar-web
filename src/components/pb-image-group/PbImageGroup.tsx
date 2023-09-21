import { createSignal, type Component, createEffect } from 'solid-js';

import Image from '../image/Image';
import pb from '../../service';

import styles from './PbImageGroup.module.css';

const PbImageGroup: Component<{
    project: any,
}> = (props) => {
    const [idx, setIdx] = createSignal<number>(0)
    const [imgPaths, setImgPaths] = createSignal<string[] | null>(null)

    const getFileUrl = (imgPath: string) => pb.getFileUrl(props.project, imgPath)

    createEffect(() => {
        if (props.project != null) {
            const tempImgPaths = []
            for (const imgPath of props.project.images) {
                tempImgPaths.push(getFileUrl(imgPath))
            }

            setIdx(0)
            setImgPaths(tempImgPaths)
        }
    }, [props.project])

    return (
        <div class={styles.container}>
            {imgPaths() != null ?
                <>
                    <button
                        class={`${styles.left} chip`}
                        disabled={idx() == 0}
                        onClick={() => setIdx(idx() - 1)}>
                        &lt
                    </button>
                    <Image imgPath={imgPaths()![idx()]} />
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