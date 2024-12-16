import { useState } from "react";
import App1_1 from "./exercises/1.1-app";
import App1_2 from "./exercises/1.2-app";
import App1_3 from "./exercises/1.3-app";
import App1_4 from "./exercises/1.4-app";
import App1_5 from "./exercises/1.5-app";
import App1_6 from "./exercises/1.6-app";
import App1_7 from "./exercises/1.7-app";
import App1_8 from "./exercises/1.8-app";
import App1_9 from "./exercises/1.9-app";
import App1_10 from "./exercises/1.10-app";
import App1_11 from "./exercises/1.11-app";
import App1_12 from "./exercises/1.12-app";
import App1_13 from "./exercises/1.13-app";
import App1_14 from "./exercises/1.14-app";

export default function Part1(){
    const [exercises, setExercises] = useState("1.1");

    return (
        <div>
            <h2>Part1 Exercises</h2>
            <button onClick={() => setExercises("1.1")}>Exercise 1.1</button>
            <button onClick={() => setExercises("1.2")}>Exercise 1.2</button>
            <button onClick={() => setExercises("1.3")}>Exercise 1.3</button>
            <button onClick={() => setExercises("1.4")}>Exercise 1.4</button>
            <button onClick={() => setExercises("1.5")}>Exercise 1.5</button>
            <button onClick={() => setExercises("1.6")}>Exercise 1.6</button>
            <button onClick={() => setExercises("1.7")}>Exercise 1.7</button>
            <button onClick={() => setExercises("1.8")}>Exercise 1.8</button>
            <button onClick={() => setExercises("1.9")}>Exercise 1.9</button>
            <button onClick={() => setExercises("1.10")}>Exercise 1.10</button>
            <button onClick={() => setExercises("1.11")}>Exercise 1.11</button>
            <button onClick={() => setExercises("1.12")}>Exercise 1.12</button>
            <button onClick={() => setExercises("1.13")}>Exercise 1.13</button>
            <button onClick={() => setExercises("1.14")}>Exercise 1.14</button>
            {exercises === "1.1" && <App1_1/>}
            {exercises === "1.2" && <App1_2/>}
            {exercises === "1.3" && <App1_3/>}
            {exercises === "1.4" && <App1_4/>}
            {exercises === "1.5" && <App1_5/>}
            {exercises === "1.6" && <App1_6/>}
            {exercises === "1.7" && <App1_7/>}
            {exercises === "1.8" && <App1_8/>}
            {exercises === "1.9" && <App1_9/>}
            {exercises === "1.10" && <App1_10/>}
            {exercises === "1.11" && <App1_11/>}
            {exercises === "1.12" && <App1_12/>}
            {exercises === "1.13" && <App1_13/>}
            {exercises === "1.14" && <App1_14/>}
        </div>
    )
}