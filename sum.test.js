
const sum=require('./test/sum.js')

test('add 1+2 to 3',()=>{
    expect(sum(1,2)).toBe(3)  //toBe() is used to check its exactly the same
})
test('objects in array',()=>{
    const data={one:1}
    data['two']=2
    expect(data).toEqual({one:1,two:2})  //toEqual() is used to iterate through array
})
test('value is null',()=>{    //toBeNull() is used to check it is null or not
    const n=null;
    expect(n).toBeNull();
    
})  
test('value is defined',()=>{     //toBeDefined() is used to check the variable is defined or not
    const a=1;
    expect(a).toBeDefined();
    
}) 
test('value is truth',()=>{     //toBeTruthy() is used to check the variable returns truth/correct condition or not
    const x=3>1;
    expect(x).toBeTruthy();
    
}) 
test('value is false',()=>{     //toBeFalsy() is used to check the variable returns false/wrong  condition or not
    const x=false;
    expect(x).toBeFalsy();
    
}) 

//to run use 'npm test'