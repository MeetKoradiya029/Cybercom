function one(sec,third){
    setTimeout(()=>{
       console.log("function two is started executing...")
        sec(third);
    },10000)
    console.log("function one is started executing...")
}
function two(third){
    setTimeout(()=>{
        console.log(" function three is started executing...")

    },8000)

    
}
function three(){
    setTimeout(()=>{
        console.log("third function is started executing...")
    })
}

one(two,three)