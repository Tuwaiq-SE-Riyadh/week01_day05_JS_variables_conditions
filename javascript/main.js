function Fortune(numberChildren, partnerName, geographicLocation, jobTitle){

    console.log("number of children:" + numberChildren)
    console.log("partner name:" + partnerName)
    console.log("geographic location:" + geographicLocation)
    console.log("job title:" + jobTitle)
}
function ageCalculator(birthYear){

    var d = new Date();
    var n = d.getFullYear();
    
	var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    console.log(age)
}

function Geometrizer(area){

    console.log(2*Math.PI*area)
}

/* -----------------------The World Translator-------------------- */


function print(massage){

    if(massage == "English"){
        console.log("Hello World")
    }
    else if(massage == "Arabic "){
        console.log("مرحبا بالعالم")
    }
    else if(massage == "French "){
        console.log("Bonjour le monde")
    }
    else{
        console.log("Error choosing language")
    }
}