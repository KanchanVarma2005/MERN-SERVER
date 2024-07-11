// mock getData and process the mocked data
//mock module
jest.mock('./test/util.js',()=>({
    getData:jest.fn(),
    getRaw:jest.fn()
}));

const {getData,getRaw}=require('./test/util.js');
const {processData,processRaw}=require('./test/proceddData.js')

//mock the return value by mockReturnValue

test('Mocked the process Data',()=>{
    //mock the return value of getData
    getData.mockReturnValue('mocked data')
  
    expect(processData()).toBe('Processed:mocked data')
   
})
test('Mocked the raw Data',()=>{
    //mock the return value of getData
    
    getRaw.mockReturnValue('mocked raw')
    
    expect(processRaw()).toBe('mocked raw')
})