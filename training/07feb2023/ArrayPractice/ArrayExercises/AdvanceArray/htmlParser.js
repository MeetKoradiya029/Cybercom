var input = "<html><head></head><body></body></br></html>";

// console.log(inputArr)

 let our_str= str(input);

//  console.log(our_str)

 let newTemp=[]
 our_str.forEach(j=>{
    if(j[0]!="/"){
        newTemp.push(j)
        // console.log(newTemp)
        if(our_str.indexOf('/'+j)>0){
            console.log(our_str.indexOf('/'+j))
            newTemp.push("/"+j)
            // console.log(newTemp)
        }

    }else if(j[j.length-1]=='/'){
        newTemp.push(j)
    }
 })

 console.log(newTemp)

 if(newTemp.length==our_str.length){
    console.log("valid")
 }else{
    console.log("invalid")
 }
// console.log(newTemp)





function str(input){
let token = [];


  for (let i = 0; i < input.length; i++) {
    let temp = input.substring(input.indexOf("<") + 1, input.indexOf(">"));
    // console.log(temp);

        token.push(temp)
    
    input = input.slice(input.indexOf(">")+1)
    // console.log(input)
  }

    // console.log(token);
    // let newTemp = [];

    // token.forEach(data=>{
    //     if(data[0]!="/"){
    //         newTemp.push(data)
    //     }
    // })
    // console.log(newTemp)

    return token;

  
}
  
  
  



