import { useState } from "react"

function Conditional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function sendEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function clearEmail() {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Register your email:</h2>
            <form>
                <input
                    type="email"
                    placeholder="Insert your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </form>
            <button onClick={sendEmail}>Send Email</button>
            {userEmail && (
                <div>
                    <p>The user email is: {userEmail}</p>
                    <button onClick={clearEmail}>Clear Email</button>
                </div>

            )}
        </div>
    )
}

export default Conditional