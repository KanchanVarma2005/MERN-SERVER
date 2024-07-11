const {getData,getRaw}=require('./util.js')

function processData(){
    return `Processed:${getData()}`  // process real data
}
function processRaw(){
    return getRaw();  // process real data
}

module.exports={processData,processRaw};
