import { useState } from "react"
import Statistics from "./1.11-components/Statistics"
import Button from "./1.11-components/Button"

const App1_11 = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleClick = (number, type) => {
        let value = number + 1;
        
        if (type === "Good") setGood(value);
        if (type === "Neutral") setNeutral(value);
        if (type === "Bad") setBad(value);
    }

    return (
        <>
        <h1>Give Feedback</h1>
        <Button label="Good" onClick={handleClick} value={good}/>
        <Button label="Neutral" onClick={handleClick} value={neutral}/>
        <Button label="Bad" onClick={handleClick} value={bad}/>
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

export default App1_11