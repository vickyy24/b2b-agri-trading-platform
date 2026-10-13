const StatusMessage = ({ message, type, className }) => {

    return(
        message &&
        <div className={className + (type === "success" ? " bg-green-600" : " bg-red-600")}>
            {message}
        </div>
    )
}

export default StatusMessage;
