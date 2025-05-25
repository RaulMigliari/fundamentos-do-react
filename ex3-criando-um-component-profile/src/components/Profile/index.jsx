import { useState } from "react";
import LinkButton from "../LinkButton";
import Title from "../Title";
import styles from "./styles.module.css"

export default function Profile(props) {

    const [followText, setFollowText] = useState('Follow')

    function handleClick() {
        alert('Você agora está seguindo!')
        setFollowText('Following')
    }

    return (
        <div className={styles.profileCard}>
            <img src={props.avatar} alt={props.name} />
            <Title>
                <span>{props.name}</span>
                <button 
                    onClick={handleClick}
                    className={styles.followButton}
                >
                    {followText}
                </button>
            </Title>
            <p>{props.bio}</p>
            <p>{props.tel}</p>
            <p style={{ borderBottom: "1px solid #1e90ff", paddingBottom: "1rem"}}>{props.email}</p>
            <LinkButton link="https://github.com/RaulMigliari">GitHub</LinkButton>
            <LinkButton link="https://www.linkedin.com/in/raulmigliari/">LinkedIn</LinkButton>
            <LinkButton link="https://www.instagram.com/raul_mgl/">Instagram</LinkButton>
        </div>
    )
}