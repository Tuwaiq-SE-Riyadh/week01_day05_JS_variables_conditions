function fortuneTeller(numOfChildren, nameOfPatner,geographicLocation,jobTitle){
    console.log("You will be a " +jobTitle+ " in " +geographicLocation + ", and married to "+nameOfPatner+
     " With "+ numOfChildren+ " kids.")

}

function theAgeCalculator(CurrentYear,BirthYear){
    console.log("They are "+ (CurrentYear-BirthYear) +" Years old")
}

function theGeometrizer(radius){
    
    let circumference = 2*3.14*radius
    console.log("the circumference is "+circumference)

}
function theTemperatureConverter(celsius,fahrenheit){
    console.log(celsius+"C is "+((9/5)*(celsius)+32)+"F")
    console.log(fahrenheit+"F is "+((5/9)*(fahrenheit-32))+"C")
}