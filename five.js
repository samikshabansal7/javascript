const coding=["js","ruby","java","c++","python"]

// coding.forEach(function(item){
//     console.log(item)
// })

coding.forEach( (item)=> {//.for each is an array method used to run a function once for every element in the array. 
    console.log(item)
})

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

const myCoding=[
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename:"python",
        languagefilename:"py"
    }
]

myCoding.forEach((item) =>{
    console.log(createImageBitmap.languageName)
})