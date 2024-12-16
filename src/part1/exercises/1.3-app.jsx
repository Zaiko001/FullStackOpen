import Content from "./1.3-components/Content"
import Header from "./1.3-components/Header"
import Total from "./1.3-components/Total";

// This exercise is practically identical to exercise 1.2, except that we use Parts as objects with name and exercises.

const App1_3 = () => {
    const course = "Half Stack application development";
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course={course} />
            <Content 
            part1={part1.name} 
            exercises1={part1.exercises}
            part2={part2.name}
            exercises2={part2.exercises}
            part3={part3.name}
            exercises3={part3.exercises}
            />
            <Total 
            exercises1={part1.exercises} 
            exercises2={part2.exercises} 
            exercises3={part3.exercises} 
            />
            <p style={{color: "yellow"}}>Accessing objects.</p>
        </div>
    )
}

export default App1_3