const fetchData=require('./test/async.js')
// const MyData=require('./test/async.js')

test('cALLBACK DATA',done=>{  //done is used to complete the action without function entering into time loop
    function callback(data){
        try{
    expect(data).toBe('admin')
    done()//test case completed
        }catch(error){
            done(error)
        }
    }
    fetchData(callback)
})

// test('Callback my data',done=>{
//     function callback(data){
//         try{
//             expect(data).toBe(10001)
//             done()
//         }catch(err){
//             done(err)
//         }
//     }
//     //MyData(callback)
// })
//mock function
test('Mocking callback function',done=>{
    
        const MockFunction=jest.fn(data=>{
        try{
            expect(data).toBe('admin');
            done()
        }catch(err){
            done(err)
    }
    })
    fetchData(MockFunction);
})