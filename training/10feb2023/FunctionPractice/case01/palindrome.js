


function palindrome(){
    let input = document.getElementById("str").value;

    let str = input.split("").reverse().join("")

    if(input==str){
        alert("String is Palindrome")
    }
    else{
        alert("string is not palindrome")
    }
    
}



   
    