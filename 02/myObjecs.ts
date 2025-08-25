const User = { 
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
}
function createUser({name: string, age}){
  

}
// createUser({name:"Sanjila", isActive:true})


export {}

function createCourse():{name: string}{
    return {name: "reactjs"}
}
let newUser= {name:"sanjila", age: 23, email: 123}
createUser(newUser)


//type aliases
type User={
    readonly _id:string
    name : string;
    email: string;
    isActive: boolean
}
// readonly and optional
function createuser(user:User): User{
   return {_id: "1", name:"", email:"", isActive: true}
}
createuser({_id: "1", name: "jsdg", email: "sdgg", isActive:true})





