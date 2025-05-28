import styles from "./styles.module.css"
import PropTypes from "prop-types";

Input.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func
}

export default function Input(props) {

    return(
        <div className={styles.input}>
            <label htmlFor={props.id}>{props.label}:</label>
            {props.type === "textarea" ? (
                <textarea 
                    name={props.id} 
                    id={props.id}
                    value={props.value}
                    onChange={(e) => props.setValue(e.target.value)}
                />
            ) : (

                <input
                type={props.type} 
                id={props.id}
                name={props.id}
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
            />
            )}
        </div>
    )
}