function fortuneTeller(numOfChildren,parentsName,geographicLocation,jobTitle){
    console.log("You will be a "+ jobTitle +" in " + geographicLocation +" , and married to "+ parentsName +" with "+ numOfChildren +" kids.")
    }
fortuneTeller(4,"razan","jeddah","develper")


function age(currYear,birthdayYear){
    let age = currYear - birthdayYear

    console.log("They are "+ age +" years old")
    }
age(2021,1996) 


function theGeometrizer(radius){
    let circumference = 2 * Math.PI * radius
    console.log("The circumference is " +circumference)
    let area = Math.PI * Math.pow(radius, 2);
    console.log("The area is "+area)
}
theGeometrizer(3)



let lang = "en"

if(lang == "en"){
    console.log("Hello World");
}
else if (lang == "ar") {
    console.log("مرحبا");
}
else if (lang=="fra"){
    console.log("Mon Amour");
}
else {
    console.log("not a option, try again");
}