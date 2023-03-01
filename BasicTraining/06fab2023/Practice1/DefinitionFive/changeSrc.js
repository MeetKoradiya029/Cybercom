function changeSunsetImg(){
    var sunset = document.getElementById("sunset");
    var attr = sunset.getAttribute("id");

    newAttr = sunset.setAttribute("src","https://www.shutterstock.com/image-photo/aerial-view-ahmedabadgujaratindia-riverfront-garden-260nw-1766454188.jpg")

    
}

function oldSunsetImg(){
    var sunset = document.getElementById("sunset");
    var oldAttr = sunset.setAttribute("src","https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg")
}

function changeNightImg(){
    var nightImg = document.getElementById("night");
    var newAttr = nightImg.setAttribute("src","https://media.istockphoto.com/id/1290895895/photo/ahmedabad.jpg?s=612x612&w=0&k=20&c=96u0bJ-lpPHEFx-ICxgvph7Tubrrdb1iLxF5Ab0VO2U=")

}

function oldNightImg(){

    var nightImg = document.getElementById("night");
    var oldAttr = night.setAttribute("src","https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg")
}
// console.log(attr);