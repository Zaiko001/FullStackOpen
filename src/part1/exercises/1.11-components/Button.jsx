const Button = ({label, onClick, value}) => {
    return <button onClick={() => onClick(value, label)}>{label}</button>
}

export default Button