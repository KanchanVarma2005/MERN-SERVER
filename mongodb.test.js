const mongoose = require('mongoose')

describe('MongoDB connected',()=>{
    beforeAll(async()=>{
    const url= 'mongodb+srv://kanchanvarma240:446G0SQx8nZWXsd5@cluster.dga8eov.mongodb.net/?retryWrites=true&w=majority&appName=Cluster';
    await mongoose.connect(url);
    });
    //call the test cases inside describe and below beforeAll
    test('MongoDB is connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1)
    })
}) 

