// const express = require('express')
// const app = express()
// const port = 3001
// // url or api endpoint,function
// app.use(express.json())  //data will be visible to express //octate or binary
// app.use(express.urlencoded({ extended: true}));
// const reqFunction=(req,res,next)=>{  //first middleware
//     console.log(`Received a ${req.method}, Requested to API ${req.url}`);
//     next();
// }
// const formDataFun=(req,res,next)=>{  //second middleware
//     //fetch the data from form
//     const {name,pass}=req.body;
//     console.log(req.body);
//     req.name=name;
//     req.pass=pass;
//     next(); // call the third middleware
// }
// const userShow = (req,res)=>{ //Third middleware
//     const name= req.name || "name";
//     const pass= req.pass || "pass";
//     res.send(`<h1>Hello ${req.name} and your password is ${req.pass}</h1>`)
// }
// //route handler to pass the parameters imagine it is client
// app.get('/login',reqFunction,(req,res)=>{
//     res.send(
//         `<form method="post" action="/login-auth">
//         <input type="text" name="name" required/>
//         <input type="password" name="pass" required/>
//         <button type="submit">Submit</button>
//         </form>`
//     );
// })
// app.post('/login-auth',reqFunction,formDataFun,userShow)
// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// });


 /*const express = require('express')
const app = express()
const router=express.Router();
const port = 3001
const homeAPI=require('./routes/home')
const loginAP   ]]]I=require('./routes/login')
app.use(express.json())  
app.use(express.urlencoded({ extended: true}));
app.use('/',homeAPI)
app.use('/',loginAPI)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});   */

// const express = require('express')
// const app = express()
// const mongoose = require('mongoose')
// const port = 3001
// const userAPI = require('./routes/users')

// app.use(express.json())
// const url='mongodb+srv://kanchanvarma240:446G0SQx8nZWXsd5@cluster.dga8eov.mongodb.net/?retryWrites=true&w=majority&appName=Cluster'
// //connecting my express app to mongoDB
// mongoose.connect(url).then(()=>{console.log('MongoDB connected')}).catch((err)=>console.log(err))

// app.use('/users',userAPI)
// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`)});

// const express = require('express')
// const mongoose = require('mongoose')
// const {ApolloServer,gql} = require('apollo-server-express')
// const typeDefs = require('./schema')
// const resolvers = require('./resolvers')
// const app = express()
// const port = 3001


// app.use(express.json())

// const url='mongodb+srv://kanchanvarma240:446G0SQx8nZWXsd5@cluster.dga8eov.mongodb.net/?retryWrites=true&w=majority&appName=Cluster'
// //connecting my express app to mongoDB
// mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('MongoDB connected')}).catch((err)=>console.log(err))


// //start my apollo express server
// const server = new ApolloServer({typeDefs,resolvers});

// app.get('/users/search/:name', async(req, res)=> {
//     try{
//         const name=req.params.name;
//         const {data,error}=await server.executeOperation({
//             query:gql`query{ searchUsers(name:${name}){id name email}}`

//         });
    
//     if(error){
        
//         return res.status(500).send(error);
//     }

//     res.status(201).send(data)
// }catch(err){
//     res.status(500).send(err)
// }
//
// async function StartServer(){
//     await server.start();
//     server.applyMiddleware({app});//run my express code
//     app.listen(port,()=>{
//         console.log(`Server is running on port ${port}`)});
// }

// StartServer();  