function sayMyName(){
    console.log("Y");
    console.log("U");
    console.log("V");
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyName()  // --> Execution
// sayMyName //  --> Reference

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);    //  --> this function will return undefined when stored in a variable.
// }

// const result = addTwoNumbers(3, 4)

function addTwoNumbers(number1, number2){
    // let sum = number1 + number2
    // return sum
    return number1 + number2
}

const result = addTwoNumbers(3, 4)
// console.log("Result: ", result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Yuvraj"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 600));

const user = {
    username: "Yuvraj",
    price: 99
}

function handleObject(anyUser){
    console.log(`Username is ${anyUser.username} and price is ${anyUser.price}`);    
}

// handleObject(user)

handleObject({
    username: "Sam",
    price: 299
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
