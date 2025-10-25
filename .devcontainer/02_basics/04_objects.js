// const tinderUser = new Object()   // singelton object
const tinderUser = {}            // nonsingelton object

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = true

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Yuvraj",
            lastName: "Singh"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "y@gmail.com"
    },
    {
        id: 2,
        email: "k@gmail.com"
    },
    {
        id: 3,
        email: "s@gmail.com"
    }
]


// +++++++++++++++++ Destructuring +++++++++++++++++++ 


const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);
