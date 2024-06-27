function Person(props) {
    return(
        <div>
            <img src={props.photo} alt={props.name} />
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Job: {props.job}</p>
        </div>
    )
}

export default Person