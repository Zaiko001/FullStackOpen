import Content from "./1.2-components/Content"
import Header from "./1.2-components/Header"
import Total from "./1.2-components/Total";

// This exercise is practically identical to exercise 1.1, except for the Content component.

const App1_2 = () => {
    const course = "Half Stack application development";
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;

    return (
        <div>
            <Header course={course} />
            <Content 
            part1={part1} 
            exercises1={exercises1}
            part2={part2}
            exercises2={exercises2}
            part3={part3}
            exercises3={exercises3}
            />
            <Total 
            exercises1={exercises1} 
            exercises2={exercises2} 
            exercises3={exercises3} 
            />
            <p style={{color: "green"}}>This exercise is practically identical to exercise 1.1, except for the Content component.</p>
        </div>
    )
}

export default App1_2