import { useState } from "react";
import FirstDiagram from "./exercises/0.4-diagram";
import SecondDiagram from "./exercises/0.5-diagram";
import ThirdDiagram from "./exercises/0.6-diagram";

export default function Part0(){
    const [diagram, setDiagram] = useState("0.4");

    return (
        <div>
            <h2>Part0 Exercises</h2>
            <button onClick={() => setDiagram("0.4")}>Exercise 0.4</button>
            <button onClick={() => setDiagram("0.5")}>Exercise 0.5</button>
            <button onClick={() => setDiagram("0.6")}>Exercise 0.6</button>           
            {diagram === "0.4" && <FirstDiagram/>}
            {diagram === "0.5" && <SecondDiagram/>}
            {diagram === "0.6" && <ThirdDiagram/>}
        </div>
    )
}