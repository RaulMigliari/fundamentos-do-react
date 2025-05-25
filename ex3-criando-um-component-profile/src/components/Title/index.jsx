import styles from "./style.module.css"

export default function Title(props) {
    return <h1 className={styles.titleClass}>{props.children}</h1>
}