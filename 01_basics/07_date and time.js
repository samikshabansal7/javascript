 let myDate=new Date()
 console.log(myDate.toString()) 
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());

 let mycreatedDate=new Date(2017,9,26)//months starts from 0
 console.log(mycreatedDate.toDateString()) 

 let myTimeStamp=Date.now()
 console.log(myTimeStamp);
 console.log(mycreatedDate.getTime())//use in projects to compare time
 console.log(Date.now());
 console.log(Math.floor(Date.now()/1000))

 let newDate=new Date()
 console.log(newDate);
 console.log(newDate.getMonth())
  console.log(newDate.getDay())

  newDate.toLocaleString('default',{
    weekday:"long"
  })