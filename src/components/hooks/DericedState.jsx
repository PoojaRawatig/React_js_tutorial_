const users=[
    {name: "Alice", age:25},
    {name: "Alice", age:25},
    {name: "Alice", age:25},
    {name: "Alice", age:25},

];
export const DerivedState =()=>{
    return  (
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
               {
                users.map((curElem, index) =>{
                    return(
                    <li key={index}>
                        {curElem.name} - {curElem.age} year old
                    </li>
                    
                    )
                    
                })
               }
            </ul>
        </div>
    )



}