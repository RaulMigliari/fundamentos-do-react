import { useState } from "react"
import PropTypes from "prop-types"
import TextInput from "./TextInput"

NewGameForm.propTypes = {
    addGame: PropTypes.func
}

export default function NewGameForm ({addGame}) {

    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()

        addGame({title, cover })
        setTitle("")
        setCover("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput label="Título:" value={title} setValue={setTitle} id="title"/>
            <TextInput label="Capa:" value={cover} setValue={setCover} id="cover"/>
            <button type="submit">Adicionar à biblioteca</button>
        </form>
    )
}