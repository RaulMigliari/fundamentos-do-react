import { useState } from "react"

export default function useCommentCollection() {
    const [comments, setComments] = useState(() => {
        const storageComments = localStorage.getItem("obc-comments-lib")
        if(!storageComments) return []
        return JSON.parse(storageComments)
    })

    const addComment = ({email, content}) => {
        const date = new Date().toLocaleString()
        const id = Math.floor(Math.random() * 1000000)
        const comment = {id, email, content, date}
        setComments(state => {
            const newState = [...state, comment]
            localStorage.setItem("obc-comments-lib", JSON.stringify(newState))
            return newState
        })
    }

    return {comments, addComment}
}