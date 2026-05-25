//when we create onject using any constructor then singleton object created

//object literals->way of declaring objects 
const mySym= Symbol("key1")


 const JsUser={
       name:"samiksha",
    "full name":"samiksha Bansal",
    [mySym]:"myKey1",
    age:20,
    location:"jaipur",
    email:"samiksha@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
 }
 console.log(JsUser.email)
  console.log(JsUser["full name"])
  console.log(JsUser[mySym])

  JsUser.email="samiksha@chatgpt.com"   ///= used to overwrite values
  //Object.freeze(JsUser)   //to freeze the values
  JsUser.email="sam@micros.com"
  console.log(JsUser);

  JsUser.greeting= function() 
  {
    console.log("hello JS user")
  }
  JsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`) //this. is use to get all the properties of the object 
  }
 
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())