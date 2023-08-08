import { type Component } from 'solid-js';

import styles from './Chip.module.css';

const Chip: Component<{ text: string }> = (props) => {
    return (
        <div class={`chip ${styles.container}`}>
            {props.text}
        </div>
    )
}

export default Chip