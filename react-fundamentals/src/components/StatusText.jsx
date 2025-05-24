const StatusText = () => {
    const status = true
    return (
    <h2
        style={{
            color: status ? "#00ff9f" : "#f64348"
        }}
    >Current Status: {status ? "ON" : "OFF"}</h2>
    )
}

export default StatusText