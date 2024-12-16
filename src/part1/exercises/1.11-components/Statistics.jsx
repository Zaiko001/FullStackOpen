import StatisticsLine from "./StatisticsLine";

const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad;
    const average = (good - bad)/total;
    const positive = good/total*100;

    return (
        <>
            <table>
                <tbody>
                    <StatisticsLine label="Good" value={good} />
                    <StatisticsLine label="Neutral" value={neutral} />
                    <StatisticsLine label="Bad" value={bad} />
                    <StatisticsLine label="Total" value={total} />
                    <StatisticsLine label="Average" value={average} />
                    <StatisticsLine label="Positive" value={positive} />
                </tbody>
            </table>
        </>
    )
}

export default Statistics