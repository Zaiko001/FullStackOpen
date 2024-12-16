const StatisticsLine = ({label, value}) => {
    return (
        <tr>
            <td>
                {label}
            </td>
            <td>
                {value}{label === "Positive" && "%"}
            </td> 
        </tr>
    )
}

export default StatisticsLine