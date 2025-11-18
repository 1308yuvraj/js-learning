const user = {
    username: "Yuvraj",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);        
        console.log(this);        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this);

// function chai(){
//     let username = "Yuvraj"
//     console.log(this.username);    
// }
// chai()

// const chai = function(){
//     let username = "Yuvraj"
//     console.log(this.username); 
// }


const chai = () => {
    let username = "Yuvraj"
    console.log(this.username); 
}
// chai()

// const addTwo = (num1, num2) => {                  // explicit return
//     return num1 + num2
// }

//const addTwo = (num1, num2) => num1 + num2 // implicit return
// const addTwo = (num1, num2) => (num1 + num2) 
const addTwo = (num1, num2) => ({username: "Yuvraj"}) 

console.log(addTwo(3,4));
