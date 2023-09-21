import { createSignal, type Component, createEffect } from 'solid-js';

import Image from '../image/Image';
import pb from '../../service';

import chevron from '../../assets/icons/chevron.svg'

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
                        class={styles.leftChevron}
                        disabled={idx() == 0}
                        onClick={() => setIdx(idx() - 1)}>
                        <img src={chevron} />
                    </button>
                    <Image imgPath={imgPaths()![idx()]} />
                    <button
                        class={styles.rightChevron}
                        disabled={idx() == props.project.images.length - 1}
                        onClick={() => setIdx(idx() + 1)}>
                        <img src={chevron} />
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