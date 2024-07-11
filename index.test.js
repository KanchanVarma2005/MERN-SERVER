
const add=require('./index.js')

test('add 1+2 to 3',()=>{
    expect(add(1,2)).toBe(3)
})
test('add 1+4 to 5',()=>{
    expect(add(1,4)).toBe(5)
})
test('add -1+-7 to -8',()=>{
    expect(add(-1,-7)).toBe(-8)
})