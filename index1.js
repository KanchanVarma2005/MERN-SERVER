/*const http=require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    //headers
     
    response.end('Server is Line ');
    //payload  
}).listen(3001,()=>console.log("Server Live at http://localhost:3001"))
//listen takes 2 parameters port number,error handling function */


/*//axios
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>console.log(res.data)).catch((err)=>console.log(err.message))  */

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


 /*const {Socket} = require('dgram')
 const net= require('net');
 const server = net.createServer((socket)=>{
    socket.on('close',()=>{
    console.log("Socket closed");
 })
})
server.listen(8000);  */



  /*const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<0 || b<0) 
                return reject("Numbers must be non zero");
            return resolve(a+b);
         },3000)
})
}
const mul=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<0 || b<0) 
                return reject("Numbers must be non zero");
            return resolve(a*b);
         },3000)
})
}
//we chain our promises with .then() method
add(1,4).then((sum)=>{
    console.log(sum);    //prints sum
    return mul(sum,4);
}).then((sum2)=>{
    console.log(sum2); //prints mul=20
})  */

/*function add(a,b) {
    console.log(a+b);
    mul(a,b);
}
function mul(a,b) {
    console.log(a*b);
}
add(1,3)  */

  /*const value=(str)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof str == 'string') {
                resolve("Promise Initiated"+str)
            }
            reject("The data is not a string")
        },3000)
    });
        
}


value("Function 1").then((myvalue)=>{
    console.log(myvalue);
    //return a chained another sync function
    return value("Function 2")
}).then((myvalue)=>{
    console.log(myvalue);
})   */


//binding functions
/*const events ={
    name:'BirthdayParty',
    guests:['Ram', 'Raj'],
    printGuests(){
        console.log('Guest List for '+this.name)
        this.guests.forEach((guests)=>{
            console.log(guests+' is attending the '+this.name);
        })
    }
}
events.printGuests()  */



const http = require('http');
const { StringDecoder } = require('string_decoder');
const url = require('url');

// Create the server
const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    const path = parsedUrl.pathname;
    const method = request.method.toLowerCase();
    const decoder = new StringDecoder('utf-8');
    let buffer = '';

    request.on('data', (chunk) => {
        buffer += decoder.write(chunk);
    });

    request.on('end', () => {
        buffer += decoder.end();

        if (method === 'post' && path === '/user') {
            const data = JSON.parse(buffer);
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "User data received", data }));
        } else {
            response.writeHead(404, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "Not Found" }));
        }
    });
});

// Start the server
server.listen(8000, () => {
    console.log('Server is running on port 8000');

    // Make the axios POST request
    const axios = require('axios');
    const data = {
        username: 'abhi',
        password: '1234',
        userid: 1001
    };

    axios.post('http://localhost:8000/user', data)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
        });
});            console.log('Error: ' + (err.message || err));
