import Part from "../1.5-components/Part";

const Content = (props) => {
    
    return (
        <>
        <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Part part={props.parts[2].name} exercises={props.parts[2].exercises} /> 
        </>
    )
}

export default Content;