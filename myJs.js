//Variables HW
function fortuneTeller(childrenNumber,partnerName,geographicLoction, jobTitle )
{
    console.log("They have :" ,childrenNumber , "of childern and your partnerName is :" ,partnerName , " in :" ,geographicLoction ," and your job is :" ,jobTitle);
}

function ageCalculator(birthYear)
{
    let currntYear = new Date().getFullYear()
    console.log("They are" , currntYear-birthYear , "years old.");

}

function getCircumferenceAndArea(radius)
{
    console.log("circumference is :",2*3.14*radius );
    console.log("Area is :",3.14 * radius*radius );
}

//Conditionals HW
function Translator(language)
{
    if(language == "Engilsh")
    {
        console.log("Hello World")
    }
    if(language == "Arabic")
    {
        console.log("مرحبا بالعالم")
    }
}
