let myText = "Hello world"
let textReverse = "";
let palindrome = "Yo dono rosas, oro no doy";

console.log(myText)

for(let letter of myText){
    textReverse = letter + textReverse
}

console.log("1. " + textReverse);

function reverseText(myText){
    return [...myText].reverse().join("");
} 

console.log("2. " + reverseText(myText));

function reverseRecursive(text){
    if (text === ""){
        return "";
    }
    let subText = text.substring(1);
    return reverseRecursive(subText) + text.charAt(0);
}

console.log("3. " + reverseRecursive(myText));

console.log("4. En JavaScript debido a que los strings son inmutables no se puede hacer esto")

function clearText(palindromus){
    return palindromus.toLowerCase().split(" ").join("").replace(",", "").replace(".", "").replace(";", "");
}

function isPalindrome(text){
    let myClearText = clearText(text);
    console.log()
    return myClearText === reverseRecursive(myClearText)    
}

console.log("5. La palabra " + palindrome + " es palindrome: " + isPalindrome(palindrome));

function reverseTextLast(text){
    let myTextArr = text.split(" ")
    return myTextArr.map(word => reverseText(word))
}

console.log("6. " + reverseTextLast(myText));
