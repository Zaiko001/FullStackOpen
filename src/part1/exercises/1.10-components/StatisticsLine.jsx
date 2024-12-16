const StatisticsLine = ({label, value}) => {
    return (
        <p>{label}: {value}{label === "Positive" && "%"}</p>
    )
}

export default StatisticsLine