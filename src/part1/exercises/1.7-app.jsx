
import { useState } from "react"

const App1_7 = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const total = good + neutral + bad;
    const average = (good - bad)/total;
    const positive = good/total*100;

    const handleClick = (number, type) => {
        let value = number + 1;
        
        if (type === "good") setGood(value);
        if (type === "neutral") setNeutral(value);
        if (type === "bad") setBad(value);
    }

    return (
        <>
        <h1>Give Feedback</h1>
        <button onClick={() => handleClick(good, "good")}>Good</button>
        <button onClick={() => handleClick(neutral, "neutral")}>Neutral</button>
        <button onClick={() => handleClick(bad, "bad")}>Bad</button>
        <h2>Statistics</h2>
        <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Average: {average}</p>
            <p>Positive: {positive}</p>
        </div>
        </>
    )
}

export default App1_7