

function Translator(x){
    if (typeof x =="string"){
        
        if(x === 'Arabic'){
            console.log("مرحبا بالعالم")
 
        }else if(x === 'English'){
            console.log("Welcome to yhe world")

        }else if(x === 'French'){
            console.log(" something romantic")

        }

    }else{
        console.log("input invalid ! should enter string ")
    }
    
   }