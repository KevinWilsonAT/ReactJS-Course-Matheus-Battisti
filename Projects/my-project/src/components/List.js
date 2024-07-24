import Item from "./Item"

function List() {
   return (
    <>
        <h1>My List</h1>
        <ul>
            <Item brand="Ferrari" release_year={1985}/>
            <Item brand="Fiat" release_year={1964}/>
            <Item brand="Renault" />
            <Item brand="Chevrolet" release_year={1999}/>
            <Item />
        </ul>
    </>
   )
}

export default List