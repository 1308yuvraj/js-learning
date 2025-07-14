const accountId = 12345

let accountEmail = "yuvraj@gmail.com"
var accountPassword = "@123"
accountCity = "Dhanbad"

// accountId = 9876 --- not allowed

accountEmail = "yuv@google.com"
accountPassword = "0009"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])

/*
  Do not use var for declearing variables because of issue in block scope and functional scope
*/
