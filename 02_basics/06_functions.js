 function sayMyName(){
    console.log("S")
    console.log("A")
    console.log("M")
 }
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }
function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // console.log("hitesh")
    return number1+number2 
   
}
const result = addTwoNumbers(3,4)
// console.log("Result:",result)

function loginUserMessage(username="sam"){
    if(username===undefined){
       console.log("please enter a username")
       return 
    }
    return `${username} just logged in `
}

console.log(loginUserMessage("samiksha"))


function calculateCartPrice(val1,val2,...num1){//... is rest and spread operator both
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))

const uder={
    username:"hitesh",
    price:199
}
function handleObject(anyobject){
    console.log('username is ${anyobject.username} and price is ${anyobject.price}')
}