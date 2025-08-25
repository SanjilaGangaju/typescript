function getValue(myVal: number):boolean{
    if(myVal>5){
        return true
    }
    return "200 OK"
}
//there is also a thing like returning more than one component

const getHello = (s: string): string=>{
      return ""
}
const heros = [1, 2, 3]
heros.map(hero=>{
    return `hero is ${hero}`
})
function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}