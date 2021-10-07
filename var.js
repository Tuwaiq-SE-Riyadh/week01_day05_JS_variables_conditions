console.log(theFortuneTeller());
console.log("--------------------------");
console.log(theAgeCalculator());
console.log("--------------------------");
console.log(theGeometrizer());
console.log("--------------------------");
console.log(theTemperatureConverter());


function theFortuneTeller(){
    let numberOfChildren = 4;
    let partnersName = "Rand";
    let geographicLocation = "Riyadh";
    let jobTitle = "Programer";
    console.log("You will be a "+jobTitle+" in " +geographicLocation+", and married to " +partnersName+ " with "+ numberOfChildren+" kids");    
}

function theAgeCalculator(){

  let  currentYear = 2021;
  let birthYear =1997;
  console.log("They are "+(currentYear-birthYear)+" years old");
}

function theGeometrizer(){
    let  radius  = 5;
    console.log("The circumference is "+(radius * 3.14));
    console.log("The circumference is "+((radius*radius) * 3.14));
  }

  function theTemperatureConverter(){
    let  celsius   = 10;
    console.log(celsius+"°C is "+(celsius*33.8)+"°F");
    let fahrenheit = 90;
    console.log(fahrenheit+"°F is "+(fahrenheit/33.8)+"°C");
  }
