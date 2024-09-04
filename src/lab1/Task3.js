function Task3({fname,lname,school,age,track,skills,children}){
    return (<>

    <div>fName : {fname}</div>
    <div>lName : {lname}</div>
    <div>age : {age}</div>
    <div>track : {track}</div>
    <div>learning : {school}</div>
    {skills.map((el,i)=>(
    <span key={i}> { el } </span>)

    )}
    <div>Child : {children}</div>
    </>

    )
}
export default Task3