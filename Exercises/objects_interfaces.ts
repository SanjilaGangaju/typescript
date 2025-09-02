interface Person{
    name:string
    age:number

}
const sanjila:Person={name:"Sanjila", age:24}

function cars(name:string, model: string, year:number=2020){
    console.log(`Info about car: ${name} ${model} ${year}`)
}
cars('Porsche', 'Pink')