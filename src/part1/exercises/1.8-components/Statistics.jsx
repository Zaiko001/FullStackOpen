const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad;
    const average = (good - bad)/total;
    const positive = good/total*100;

    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Average: {average}</p>
            <p>Positive: {positive}%</p>
        </>
    )
}

export default Statistics