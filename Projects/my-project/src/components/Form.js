import { useState } from "react"

function Form() {

    function registerUser(e) {
        e.preventDefault()
        alert(`User Registered! Name: ${name} Password: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>My Registration:</h1>
            <form onSubmit={registerUser}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Insert your name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Insert your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div>
    )
}

export default Form