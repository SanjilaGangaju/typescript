function displayInfo(name:string, ageorRole?:number|string, role:string="student"){
    let age:number|undefined;
    if(typeof ageorRole=="number"){
         age= ageorRole;

        
    }
    else if (typeof(ageorRole)=="string"){
         role = ageorRole;
      
    }
    if(age!==undefined){
        return `${name} is ${age} years old and is a ${role}`;
    } else {
        return `${name} is a ${role}`;
    }
    }
    
    

console.log(displayInfo("Sanjila", "intern"))