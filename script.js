function theFortuneTeller(numberOfChildren,partnersName,geographicLocation,jobTitle ){
    console.log("You will be a" +  jobTitle + "  in " + geographicLocation+  ", and married to " + partnersName + " with " +numberOfChildren + " kids.");
    
}

function theAgeCalculator(currentYear, birthYear){
var today = new Date();
let age = birthYear-currentYear;

console.log("They are" + age + "years old");
}
function theGeometrizer(radius){
let fullRadius = 2 *radius;
console.log("The circumference is" + fullRadius * Math.PI);

let area = Math.PI * Math.pow(radius, 2)
console.log("TThe area is" + area);

}