
const fetch = require('node-fetch');
const fetchData=require('./test/api.js')


test('GET/users api data',async ()=>{
    const data=await fetchData()
    console.log(data)
    expect(data).toHaveProperty('getAllUsers')
    data.getAllUsers.forEach(user=>{
        expect(user).toHaveProperty('id')
    })
})