/*let name="Varma"
console.log(typeof name)


let student={
    age:30,
    marks:99,
    city:"Hyderabad"
}
console.log("Student details: " , student);



function fun(a,b){
    return a*b;
}
console.log(fun(2,3));  */

/*const http=require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    //headers
     
    response.end('Hello world');
    //payload
}).listen(3001,()=>console.log("Server Live at http://localhost:3001"))
//listen takes 2 parameters port number,error handling function   */

/*const fs = require('fs');
 const filedata =fs.readFileSync('read.txt');   //reaing file syncronosly
 console.log(filedata.toString());
 console.log("Execution completed successfully");   */

 /*const fs = require('fs');
 fs.readFile('read.txt',function(ferr,filedata){
    if(ferr) return console.error(ferr);
    console.log(filedata.toString());
    
 })
 console.log("Function A");
 console.log("Function B");
 console.log("Function C");*/   
      

 //node --inspect-brk index.js


 /*console.log("Function A");
 setTimeout(function (){
    console.log("Function B");
 },5000);  //used to set time to execute

 console.log("Function C");  */


 const {Socket} = require('dgram')
 const net= require('net');
 const server = net.createServer((socket)=>{
    socket.on('close',()=>{
    console.log("Socket closed");
 })
})
server.listen(5000);