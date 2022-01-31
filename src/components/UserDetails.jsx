import "./userdetails.css"

export const UserDetails = ({name,add,age,isMarried})=>{
    return( <>
        <h1 className="username" >Username: {name}</h1>
        <p>location: {add}</p>
        <p>age: {age}</p>
        <p>Is Married?: {isMarried ?"Yes" : "No"}</p>
    </>)
}