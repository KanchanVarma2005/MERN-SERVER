//to pre process the queries

const User = require('./model/ProductSchema.js');
//parent
//define our resolves to execute

const resolvers={
    Query:{
        getUser:async(_,{id})=>{
            return await User.findById(id);
        },
        getUsers:async()=>{
            return await User.find();
        },
        searchUsers:async(_,{name})=>{
            return await User.find({name:new RegExp(name,'i')})
        },
        getLimitedUsers:async(_,{limit,offset})=>{
            return await User.find().skip(offset).limit(limit);
        }
    },
    Mutation:{
        createUser:async(_,{input})=>{
            const newUser = new User(input);
            return await newUser.save();
        },
        updateUser:async(_,{id,input})=>{
            return await User.findByIdAndUpdate(id,input)

        },
        deleteUser:async(_,{id})=>{
            return await User.findByIdAndDelete(id)

        },
        changePass:async(_,{id,password})=>{
            return await User.findByIdAndUpdate(id,{password:password})
        },
        changeName:async(_,{id,name})=>{
            return await User.findByIdAndUpdate(id,{name:name})
        }
    },
    User:{
        email:(parent)=>parent.email || '',
        name:(parent)=>parent.name || ''
    }
}
module.exports = resolvers;

