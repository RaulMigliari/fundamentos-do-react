import LinkButton from "../LinkButton";
import styles from "./styles.module.css"

export default function Profile(props) {
    return (
        <div className={styles.profileCard}>
            <img src={props.avatar} alt={props.name} />
            <h1>{props.name}</h1>
            <p>{props.bio}</p>
            <p>{props.tel}</p>
            <p style={{ borderBottom: "1px solid #1e90ff", paddingBottom: "1rem"}}>{props.email}</p>
            <LinkButton link="https://github.com/RaulMigliari" socialMedia = "GitHub"/>
            <LinkButton link="https://www.linkedin.com/in/raulmigliari/" socialMedia = "LinkedIn"/>
            <LinkButton link="https://www.instagram.com/raul_mgl/" socialMedia = "Instagram"/>
        </div>
    )
}