import PropTypes from "prop-types"

Comment.propTypes = {
    email: PropTypes.string,
    date: PropTypes.string,
    content: PropTypes.string
}

export default function Comment({email, date, content}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
        }}>
            <h3 style={{fontWeight: 'bold'}}>{email}</h3>
            <div>{date}</div>
            <div>{content}</div>
        </div>
    )
}