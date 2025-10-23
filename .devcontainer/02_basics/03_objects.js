// Singleton
// Object.create -> used to create singleton objects

// Object literals
const mySym = Symbol("key1")
const JSuser = {
    name: "Yuvraj",
    "full name" : "Yuvraj Singh",
    [mySym]: "myKey1",
    age: 24,
    location: "Dhanbad",
    email: "yuvraj@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]); // only way to access 
// console.log(JSuser[mySym]);

JSuser.email = "yuvraj.google.com"
// Object.freeze(JSuser)
// JSuser.email = "yuvraj.microsoft.com"
// console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello JS user");
}
JSuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());
