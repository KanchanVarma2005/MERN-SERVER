
//dealing with the testing of async function
function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },1000)
}
function MyData(callback){
    setTimeout(()=>{
        const id=10001;
        callback(id)
    },1000)
}
//it  calls admin after 4 seconds
module.exports=fetchData;
//module.exports=MyData;
