import { useRef } from "react";

export default function RefExample() {
    const inputRef = useRef(null)

    const handleSubmit = () => {
        console.log(inputRef.current)
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = '#F64348'
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit}>Focar no Input</button>
        </div>
    )
}