import styles from "./styles.module.css"

export default function LinkButton(props) {
    return <a className={styles.linkButton} href={props.link} target="blank">{props.children}</a>
}