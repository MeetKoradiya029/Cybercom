function covert() {
  let str = document.getElementById("string").value;
  let show = document.getElementById("root")

  function inner(str) {
       var arr= str.split("")
      
       return arr
    
  }

  console.log(inner(str))
  show.innerHTML=inner(str)

}
