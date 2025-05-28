import { useState } from "react";
import Input from "../Input/Input";
import styles from "./styles.module.css"
import PropTypes from "prop-types";

CommentsForm.propTypes = {
    addComment: PropTypes.func
}

export default function CommentsForm({addComment}) {

    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (ev) => {
        ev.preventDefault()

        addComment({email, content})
        setEmail('')
        setContent('')
    }

    return (
        <form onSubmit={handleSubmit} className={styles.formControl}>
            <Input id="email" label="E-mail" type="email" value={email} setValue={setEmail}/>
            <Input id="comments" label="Comentário" type="textarea" value={content} setValue={setContent}/>
            <button type="submit">Enviar Comentário</button>
        </form>
    )
}