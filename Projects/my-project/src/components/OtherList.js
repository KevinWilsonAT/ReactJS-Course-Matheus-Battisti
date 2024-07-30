function OtherList({items}){
    return (
        <>
            <h3> Good Things List: </h3>
            {
                items.length > 0 ? (
                    items.map((item, index) => (<p key={index}>{item}</p>))
                ) : (<p>There isn't items in the List</p>)
            }
        </>
    )
}

export default OtherList