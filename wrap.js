const wrap = (line, maxLen) => {
let strArr = line.split('');

console.log(strArr.splice(maxLen, 0,`tea`))

if(line.length<=maxLen){
  return line;
}
if(line.length> maxLen){
 
}

};
module.exports = wrap;
