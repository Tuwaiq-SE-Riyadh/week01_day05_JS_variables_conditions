// Store the following into variables: number of children, partner 's name, geographic location, job title. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
function fortuneTeller(numChild, pName, loc, jobTitle, ) {
    console.log("You will be a " +
        jobTitle + " in " +
        loc + " and married to " +
        pName + " with" +
        numChild + " kids."
    )
}



// The Age Calculator
function ageCallculater(cYear, bYear) {
    let age = cYear - bYear
    console.log("They are " + age + " : years old ")

}

//The Geometrizer computes the circumference and area of a circle given a radius as an imput
function circle(rad) {
    let circumference = rad * 3.14

    console.log("The circumference is " + circumference)

    let area = 0.5 * circumference * (rad / 2)

    console.log("The area is " + area)


}