function bmiCalc(){
    let  weight = document.getElementById("mass").value;
    let height = document.getElementById("height").value;

    height_meter = parseInt(height)*3.2808;

    let bmi=weight/(height*height);


    console.log(bmi)   
    return bmi;
}