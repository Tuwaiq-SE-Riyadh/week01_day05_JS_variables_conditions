
// This is for variables Homework 
// The Fortune Teller
function fortuneTeller(numbOfchildren, partnerName, glocation, jobTitle){
console.log("You will be a " + jobTitle + " in "+ glocation + ", and married to " + partnerName + " with " + numbOfchildren + " kids.")

}

// The Age Calculator
function ageCalculator(currentYear, birthYear){
    console.log(currentYear - birthYear);
}

// The Geometrizer
function circle(radius){
    console.log("The circumference is " + (radius * 2 * 3.14));
    console.log("The area is " + (3.14 * (radius*radius)))

}

// This is for cconditionals Homework 
// Translator
function translator(language){
    if(language.toLowerCase() === "English".toLowerCase())
    {
        console.log("Hello World")
    }
    else if(language.toLowerCase() === "Arabic".toLowerCase())
    {
        console.log("مرحبا بالعالم")
    }
    else if(language.toLowerCase() === "French".toLowerCase())
    {
        console.log("French")
    }
    else 
    console.log("sorry i don't know this language")
}