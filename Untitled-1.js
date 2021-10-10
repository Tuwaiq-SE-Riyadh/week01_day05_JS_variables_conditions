
 function fortune  ( thenumberofchildren ,partnername, geographiclocation,  jobtitle ){
    console.log("they have",thenumberofchildren , "your name:" ,partnername,"location",  "jobtitle",jobtitle)
 }
function ageCalculator ( birthday){
    let date =  new Date().getFullYear();
    age = date - birthday;
    
    console.log("They are age" ,age ,"years old" )
}

function geometrizer (radius){
     let circ = 2 * 3.14 *radius;
     let area= radius * radius * 3.14;

    console.log("The circumference is " ,circ ,"   THE area of circle is",area)
}

