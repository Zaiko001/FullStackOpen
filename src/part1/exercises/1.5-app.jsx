import Content from "./1.5-components/Content"
import Header from "./1.5-components/Header"
import Total from "./1.5-components/Total";

// This exercise is practically identical to exercise 1.4, except that we add course to Parts

const App1_5 = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
            <p style={{color: "red"}}>Combining course name and parts on a single array of objects.</p>
        </div>
    )
}

export default App1_5