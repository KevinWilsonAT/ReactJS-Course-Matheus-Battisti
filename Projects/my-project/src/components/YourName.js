function YourName({setName}) {
    return(
        <div>
            <p>Insert Your Name: </p>
            <input
                type="text"
                placeholder="What is your name?"
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    )
}

export default YourName