import Content from "./1.4-components/Content"
import Header from "./1.4-components/Header"
import Total from "./1.4-components/Total";

// This exercise is practically identical to exercise 1.3, except that we use Parts as an array of objects with name and exercises.

const App1_4 = () => {
    const course = "Half Stack application development";
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts}/>
            <Total parts={parts}/>
            <p style={{color: "orange"}}>Accessing array of objects.</p>
        </div>
    )
}

export default App1_4