import Button from "./eventss/Button"

function Event({num}){

    function myEvent() {
        alert(`I'm activated!" ${num}`)
    }

    function secondEvent() {
        alert("Activate the 2nd event")
    }

    return (
        <div>
            <p> Click to trigger an event: </p>
            <Button event={myEvent} text="First Event" />
            <Button event={secondEvent} text="Second Event" />
            <button onClick={myEvent}>Activate!</button>
        </div>
    )
}

export default Event