function FortuneTeller(nunChildren, partnersName, location, job){

    console.log("You will be a "+ job +" in " + location + ", and married to " 
    + partnersName + " with "+ nunChildren + " kids.")

}

function AgeCalculator(CurrentYear , BirthYear){

    let result = CurrentYear - BirthYear;
    console.log(result);
}

function Geometrizer(radius){

    // circumference = π * r * 2
    let circumference = 3.14 * 2 * radius;

    // Area = πr^2
    let area = 3.14 *radius*radius;

    console.log("The circumference is " + circumference);
    console.log("The area is " + area)

}

function TemperatureConverter(celsius){

    // (celsius°C × 9/5) + 32
    let CelsiusToFahrenheit = ((celsius*9)/5) + 32 ;
    console.log(celsius +'°C is '+ CelsiusToFahrenheit +'°F');

    // (fahrenheit°F − 32) × 5/9
    let FahrenheitToCelsius = ((CelsiusToFahrenheit-32)*5)/9
    console.log(CelsiusToFahrenheit+"°F is "+ FahrenheitToCelsius +"°C.")

}
