function Greetings({name}) {

    function generateGreeting(someName) {
        return `Hello, ${someName}. How are you?`
    }

    return(
        <> { name && <p>{generateGreeting(name)}</p> } </>
    )
}

export default Greetings