const str = ["xyz","xyzw","abc","abcde"];

let max = 0;

for(let i=0;i<str.length;i++){
    if(str[i].length>str[max].length){
        max=i;
    }
}
console.log("longest String: "+str[max]);