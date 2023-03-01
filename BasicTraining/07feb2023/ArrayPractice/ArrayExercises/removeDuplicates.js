const num = [8,52,4,6,8,3,3,78]

// function removeDuplicate(num){
//     return num.filter((current,index)=>{
//         return num.indexOf(current)===index;
//     })
// }
function removeDuplicate(num){
    return [...new Set(num)]
}
console.log(removeDuplicate(num));