// I use this site to konw how check arabic languge  
//https://stackoverflow.com/questions/4446244/how-to-check-if-any-arabic-character-exists-in-the-string-javascript/4446309

function check(languge) {
    if (languge == "English") //if the English language 
    {
        console.log("Hello World")
    } else if (languge == "Arabic") //if the not English language
    {
        console.log("مرحبا بالعالم ")
    } else if (languge == "French") {
        console.log("Bienvenue")
    } else {
        console.log("The languge is neither English nor Arabic nor French ")
    }
}