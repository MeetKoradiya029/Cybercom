 arr = [12,45,4,6,8];

function check(){
   let temp = []
    let num = document.getElementById("number").value;
    let show = document.getElementById("show");

    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            temp.push(arr[i])
        }
    }
    show.innerHTML=temp
    return temp
}
