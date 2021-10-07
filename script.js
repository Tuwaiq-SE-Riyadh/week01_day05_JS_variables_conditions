function fortuneTaller(childeren, partenrName, location, jobTitle){
    let x = "You will be a "+ jobTitle +" in "+location+", and married to "+partenrName+" with "+childeren +" kids.";
    console.log(x);
}

function calculateAge(currentYear, birthYear){
    let age = currentYear - birthYear
    
    let x ="They are NN years old ".replace("NN",age);
    console.log(x)
}



function circumference(radius){
   let c = (2*Math.PI)* radius
   console.log(c);
}



function language(lang){
    
    
    if (lang =="English" || lang =="english"){
        console.log("Hello world");
    } 
    else if (lang =="Arabic" || lang =="arabic"){
        console.log("مرحبا بالعالم");
    }
}
