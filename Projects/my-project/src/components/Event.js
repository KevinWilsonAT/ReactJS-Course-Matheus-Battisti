function Event({num}){

    function myEvent() {
        alert(`I'm activated!" ${num}`)
    }

    return (
        <div>
            <p> Click to trigger an event: </p>
            <button onClick={myEvent}>Activate!</button>
        </div>
    )
}

export default Event