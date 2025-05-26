import styles from './style.module.css'
import PropTypes from "prop-types"

InputPasswordSize.propTypes = {
    passwordSize: PropTypes.number.isRequired,
    setPasswordSize: PropTypes.func.isRequired
}

export default function InputPasswordSize(props) {
    return (
        <input className={styles.input}
            type="number"
            id='passwordSize'
            min={1}
            value={props.passwordSize}
            onChange={(ev) => props.setPasswordSize(ev.target.value)}
        />
    )
}