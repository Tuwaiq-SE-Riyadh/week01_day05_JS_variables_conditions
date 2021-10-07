fortuneTeller(3,"Shrooq", "Riyadh", "Softwere Engineer" );
function fortuneTeller(numOfChild, partner, loc, job){
    console.log("You will be a "+job+" in "+loc+", and married to "+partner+" with "+numOfChild+" kids.");
}

ageCalculator(2021,1997)
function ageCalculator(currentYear, birthYear){
    let age = currentYear - birthYear
    console.log("They are "+age+" years old")
}

Geometrizer(6)
function Geometrizer(radius){
    let circumference=3.14*2*radius;
    let area = 3.14*Math.pow(radius,2);
    console.log("The circumference is "+circumference)
    console.log("The area is "+area)
}