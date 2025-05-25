import styles from './Button.module.css'

export default function Button(props) {
    return <button style={styles.button}>{props.text}</button>
}