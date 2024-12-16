import { useState } from "react"
import Statistics from "./1.9-components/Statistics"

const App1_9 = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

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
        {good || neutral || bad ? (
                <>
                    <h2>Statistics</h2>
                    <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
                        <Statistics good={good} neutral={neutral} bad={bad}/>
                    </div>
                </>
            ) : (
                <>
                <p>No feedback given</p>
                </>
            )}
        </>
    )
}

export default App1_9