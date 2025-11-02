// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner: ", a);
}

// console.log(a);

function one(){
    const username = "Yuraj"

    function two(){
        const website = "Youtube"
        console.log(username);        
    }
    // console.log(website);
    two()
}

// one()

if (true) {
    const username = "Yuvraj"
    if(username === "Yuvraj"){
        const website = " Youtube"
        console.log(username + website);        
    }
    // console.log(website);
    
}
// console.log(username);

// --------------------- interesting ---------------------------------
console.log(addOne(5));
function addOne(num){
    return num + 1
}


console.log(addTwo(5));  // error -> we can't use variable before declaration
const addTwo = function(num){
    return num+2
}

