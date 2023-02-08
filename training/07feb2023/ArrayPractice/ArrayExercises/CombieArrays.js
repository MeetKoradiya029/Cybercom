const num = [2,5,5,9,8,7];
const names = ["meet","kalpesh","vijit","meet","kalpesh"];

function removeDuplicates(num,names){
    var arr = []
    arr = num.concat(names);

    return [...new Set(arr)]

}

console.log(removeDuplicates(num,names));