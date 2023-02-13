const a = async()=>{
    console.log("calling started")
    setTimeout(async()=>{
        
        console.log("output from a()")
        
    },5000)
    await b() 
}
const b = async()=>{

    setTimeout(async()=>{
        
        console.log("output from b()")

    },10000)

    console.log("......")
     await c();

}
const c = async()=>{
    setTimeout(async()=>{
        console.log("output from c()")
    },15000)

}

a();