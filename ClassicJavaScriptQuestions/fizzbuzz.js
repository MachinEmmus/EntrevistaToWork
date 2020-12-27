// imprimir FizzBuzz

function FizzBuzz(){
    for(let i = 1; i < 101; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        } else if(i % 3 == 0){
            console.log("Fizz");
        } else if(i % 5 == 0){
            console.log("Buzz");
        } else{
            console.log(i);
        }
    }
}

function FizzBuzzO(){
    for(let i = 1; i < 101; i++){

        let mensaje = "";
        
        if(i % 3 == 0){
            mensaje += "Fizz";
        } 
        if(i % 5 == 0){
            mensaje += "Buzz";
        }
        console.log(mensaje || i);
    }
}

function FizzBuzzOo(){
    for(let i = 1; i < 101; i++){

        let mensaje = "";
        
        if(!(i % 3)){
            mensaje += "Fizz";
        } 
        if(!(i % 5)){
            mensaje += "Buzz";
        }
        console.log(mensaje || i);
    }
}

FizzBuzzOo();