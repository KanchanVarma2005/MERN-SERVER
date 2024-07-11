let dataSets=[];
// execute my env before all
beforeAll(()=>{
    dataSets=['raju','ramu'];
})
beforeEach(()=>{
    console.log('Before each setup is called');
})
afterEach(()=>{
    console.log('After each setup is called');
})
afterAll(()=>{
    dataSets=[]
})
test('Test case',()=>{
    expect(dataSets.length).toBe(2);
})
test('Data sets contains',()=>{
    expect(dataSets).toContain('ramu');
})
test('Data sets contains',()=>{
    expect(dataSets).toContain('raju');
})