// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

// var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.

var mantra = "Be the dev";
console.log(mantra.includes("B"))

// 1b. Write the code that determines if there is an 'x' in mantra.

var mantra = "Be the dev";
console.log(mantra.includes("x"))

// 1c. Write the code that determines if there is a 'v' in mantra.

var mantra = "Be the dev";
console.log(mantra.includes("v"))

// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.



// ------------------------------ Consider the following variables:

// var myDog = "Snoopy"
// var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

var myDog = "Snoopy"
var myCat = "Garfield"
var letterChecker = ()=>{
if (myDog.length > myCat.length){
    return "snoopy"
}else{
    return "garfield"
    }
}
console.log (letterChecker())

// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

var myDog = "Snoopy"
var myCat = "Garfield"
var arr1 = (myDog,myCat) => {
    return [myDog,myCat]
}
console.log(arr1(myCat,myDog))


// 2c. STRETCH: Write a function that accepts two variables and returns a string in all lowercase letters. Expected output: "snoopy garfield"




// ------------------------------ Consider the following variable:

// var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
//hint: "logs" in this case means "prints to the terminal console."  This is typically done with a console.log(x), where x is the string, function, etc that you wish to see in the terminal.

var myMessage = "Learning is fun!"
const myMessage2 = (string) =>{
let newVar = myMessage
for(let i=0; i< myMessage.length; i++){
}
return newVar
}
    console.log(myMessage2(myMessage))
    
// 3b. Write the code that logs each letter of the message using map.

var myMessage = "Learning is fun!"
var newMyMessage = myMessage.split("").map(function(z){return z})
console.log (myMessage)

// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.



// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().




// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"


var newString1 = testString.split("")
const vowler = (x) =>{
    return x.filter(y =>"aeiou".includes (y.toLowerCase())===false).join("")
}
console.log(vowler(newString1))


// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.






// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var cats1 = toonimals.filter (value => value.animal ==="cat")
console.log (cats1)


//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

var cats2 = toonimals.filter (value => value.animal !== "cat").map((value) => value.name)
console.log (cats2)


//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"
