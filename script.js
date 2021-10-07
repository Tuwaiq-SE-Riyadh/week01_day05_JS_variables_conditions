function calculateAge(currentYear, birthYear){
    let age = currentYear - birthYear
    
    let x ="They are NN years old ".replace("NN",age);
    console.log(x)
}

function fortuneTaller(childeren, partenrName, location, jobTitle){
    let x = "You will be a "+ jobTitle +" in "+location+", and married to "+partenrName+" with "+childeren +" kids.";
    console.log(x);
}

function circumference(radius){
   let c = (2*Math.PI)* radius
   console.log(c);
}