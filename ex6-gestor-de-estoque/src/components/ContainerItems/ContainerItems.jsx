import styles from "./styles.module.css"

export default function ContainerItems(props) {
    return (
        <div className={styles.container}>
            <h3 style={{fontSize: '1.5rem', margin: '1rem 2rem'}}>{props.text}</h3>
            <p style={{fontSize: '6rem', textAlign: 'center '}}>{props.number}</p>
        </div>
    )
}