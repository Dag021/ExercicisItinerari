/*****************************************************************************************************/
/**************************************** Form Cars **************************************************/
/*****************************************************************************************************/
var arrayCars : any= [];
var arrayWheels : any = [];

function createCar(plate:string,brand:string,color:string){
    plate = (<HTMLInputElement>document.getElementById('valPlate')).value;
    color = (<HTMLInputElement>document.getElementById('valColor')).value;
    brand = (<HTMLInputElement>document.getElementById('valBrand')).value;
    let checkPlate:boolean = false;
    
     //check plate
     var expReg = /^((\d{4}\s[A-Z a-z]{3}))|((\d{4}[A-Z a-z]{3}))$/g;
     if(expReg.test(plate)){
         checkPlate = true;
         (<HTMLInputElement>document.getElementById('valPlate')).className = "form-control is-valid";
        (<HTMLInputElement>document.getElementById('errorValPlate')).style.display = "none"; 
     } else {
         if(plate == "") {
            checkPlate = false; 
            (<HTMLInputElement>document.getElementById('valPlate')).className = "form-control is-invalid";
            (<HTMLInputElement>document.getElementById('errorValPlate')).style.display = "block";
         } else {
            checkPlate = false; 
            (<HTMLInputElement>document.getElementById('errorValPlate')).innerHTML = "FORMAT: 4 NUM AND 3 LETTERS";
            (<HTMLInputElement>document.getElementById('errorValPlate')).style.display = "block";
         }
     }
     //check plate
     if(color == "") {
        checkPlate = false; 
        (<HTMLInputElement>document.getElementById('valColor')).className = "form-control is-invalid";
        (<HTMLInputElement>document.getElementById('errorValColor')).style.display = "block";
     } else {
        (<HTMLInputElement>document.getElementById('valColor')).className = "form-control is-valid";
        (<HTMLInputElement>document.getElementById('errorValColor')).style.display = "none"; 
        }
      //check plate
      if(brand == "") {
        checkPlate = false; 
        (<HTMLInputElement>document.getElementById('valBrand')).className = "form-control is-invalid";
        (<HTMLInputElement>document.getElementById('errorValBrand')).style.display = "block";
     } else {
        (<HTMLInputElement>document.getElementById('valBrand')).className = "form-control is-valid";
        (<HTMLInputElement>document.getElementById('errorValBrand')).style.display = "none"; 
        }
    
    if(checkPlate == true){
        checkPlate = false; 
        var car = new Car(plate, color, brand);
        arrayCars.push(car);

        /**** Result (hidden "CarsForm" and show "carInfo" & "WheelsForm") ****/
        (<HTMLInputElement>document.getElementById('infoPlate')).innerText ="PLATE: " + car.plate;
        (<HTMLInputElement>document.getElementById('infoColor')).innerText = "COLOR: " + car.color;
        (<HTMLInputElement>document.getElementById('infoBrand')).innerText = "BRAND: " + brand; 
        (<HTMLInputElement>document.getElementById('CarsForm')).style.display = "none";
        (<HTMLInputElement>document.getElementById('carInfo')).style.display = "block";
        (<HTMLInputElement>document.getElementById('WheelsForm')).style.display = "block";
        (<HTMLInputElement>document.getElementById('valPlate')).value = '';
        (<HTMLInputElement>document.getElementById('valColor')).value = '';
        (<HTMLInputElement>document.getElementById('valBrand')).value = '';
    }
}

/*****************************************************************************************************/
/************************************** Form Wheels **************************************************/
/*****************************************************************************************************/

function createWheels(): any {
    //wheel1
    let valueDiameterW1 = (<HTMLInputElement>document.getElementById('valDiameterW1')).value;
    let diameterW1 : number = parseInt(valueDiameterW1);
    let brandW1 : string = (<HTMLInputElement>document.getElementById('valBrandW1')).value;
    //wheel2
    let valueDiameterW2 = (<HTMLInputElement>document.getElementById('valDiameterW2')).value;
    let diameterW2 : number = parseInt(valueDiameterW2);
    let brandW2 : string = (<HTMLInputElement>document.getElementById('valBrandW2')).value;
    //wheel3
    let valueDiameterW3 = (<HTMLInputElement>document.getElementById('valDiameterW3')).value;
    let diameterW3 : number = parseInt(valueDiameterW3);
    let brandW3 : string = (<HTMLInputElement>document.getElementById('valBrandW3')).value;
    //wheel4
    let valueDiameterW4 = (<HTMLInputElement>document.getElementById('valDiameterW4')).value;
    let diameterW4 : number = parseInt(valueDiameterW4);
    let brandW4 : string = (<HTMLInputElement>document.getElementById('valBrandW4')).value;
    
    //Checked Diameter
    let checkDiameter :boolean = true;
    
    if(diameterW1 > 0.4 && diameterW1 < 2 ){
        (<HTMLInputElement>document.getElementById('valDiameterW1')).className = "form-control is-valid";
        (<HTMLInputElement>document.getElementById('errorValDiameterW1')).style.display = "none";
    } else {
        checkDiameter = false;
        if(valueDiameterW1 == ""){
            (<HTMLInputElement>document.getElementById('valDiameterW1')).className = "form-control is-invalid";
            (<HTMLInputElement>document.getElementById('errorValDiameterW1')).style.display = "block";
        } else {
            alert("WHEEL DIAMETER 1 IS NOT CORRECT");
            (<HTMLInputElement>document.getElementById('errorValDiameterW1')).innerHTML = "DIAMETER: d > 0.4 & d < 2 ";
            (<HTMLInputElement>document.getElementById('errorValDiameterW1')).style.display = "block";
            (<HTMLInputElement>document.getElementById('valDiameterW2')).className = "form-control is-invalid";
        }
    }
    if(diameterW2 > 0.4 && diameterW2 < 2 ){
        (<HTMLInputElement>document.getElementById('valDiameterW2')).className = "form-control is-valid";
        (<HTMLInputElement>document.getElementById('errorValDiameterW2')).style.display = "none";
    } else {
        checkDiameter = false;
        if(valueDiameterW2 == ""){
            (<HTMLInputElement>document.getElementById('valDiameterW2')).className = "form-control is-invalid";
            (<HTMLInputElement>document.getElementById('errorValDiameterW2')).style.display = "block";
        } else {
            alert("WHEEL DIAMETER 2 IS NOT CORRECT");
            (<HTMLInputElement>document.getElementById('errorValDiameterW2')).innerHTML = "DIAMETER: d > 0.4 & d < 2 ";
            (<HTMLInputElement>document.getElementById('errorValDiameterW2')).style.display = "block";
            (<HTMLInputElement>document.getElementById('valDiameterW2')).className = "form-control is-invalid";
        }
    }
    if(diameterW3 > 0.4 && diameterW3 < 2 ){
        (<HTMLInputElement>document.getElementById('valDiameterW3')).className = "form-control is-valid";
        (<HTMLInputElement>document.getElementById('errorValDiameterW3')).style.display = "none";
    } else {
        checkDiameter = false;
        if(valueDiameterW3 == ""){
            (<HTMLInputElement>document.getElementById('valDiameterW3')).className = "form-control is-invalid";
            (<HTMLInputElement>document.getElementById('errorValDiameterW3')).style.display = "block";
        } else {
            alert("WHEEL DIAMETER 3 IS NOT CORRECT");
            (<HTMLInputElement>document.getElementById('errorValDiameterW3')).innerHTML = "DIAMETER: d > 0.4 & d < 2 ";
            (<HTMLInputElement>document.getElementById('errorValDiameterW3')).style.display = "block";
            (<HTMLInputElement>document.getElementById('valDiameterW2')).className = "form-control is-invalid";
        }
    }
    if(diameterW4 > 0.4 && diameterW4 < 2 ){
        (<HTMLInputElement>document.getElementById('valDiameterW4')).className = "form-control is-valid";
        (<HTMLInputElement>document.getElementById('errorValDiameterW4')).style.display = "none";
    } else {
        checkDiameter = false;
        if(valueDiameterW4 == ""){
            (<HTMLInputElement>document.getElementById('valDiameterW4')).className = "form-control is-invalid";
            (<HTMLInputElement>document.getElementById('errorValDiameterW4')).style.display = "block";
        } else {
            alert("WHEEL DIAMETER 4 IS NOT CORRECT");
            (<HTMLInputElement>document.getElementById('errorValDiameterW4')).innerHTML = "DIAMETER: d > 0.4 & d < 2 ";
            (<HTMLInputElement>document.getElementById('errorValDiameterW4')).style.display = "block";
            (<HTMLInputElement>document.getElementById('valDiameterW2')).className = "form-control is-invalid";
        }
    }

    //Checked Brand
    let checkBrand :boolean = true;

    if(brandW1  == "") {
        checkBrand = false; 
        (<HTMLInputElement>document.getElementById('valBrandW1')).className = "form-control is-invalid";
        (<HTMLInputElement>document.getElementById('errorValBrandW1')).style.display = "block";
     } else {
        (<HTMLInputElement>document.getElementById('valBrandW1')).className = "form-control is-valid";
        (<HTMLInputElement>document.getElementById('errorValBrandW1')).style.display = "none"; 
        }
    if(brandW2  == "") {
        checkBrand = false; 
        (<HTMLInputElement>document.getElementById('valBrandW2')).className = "form-control is-invalid";
        (<HTMLInputElement>document.getElementById('errorValBrandW2')).style.display = "block";
     } else {
        (<HTMLInputElement>document.getElementById('valBrandW2')).className = "form-control is-valid";
        (<HTMLInputElement>document.getElementById('errorValBrandW2')).style.display = "none"; 
       }
    if(brandW3  == "") {
        checkBrand = false; 
        (<HTMLInputElement>document.getElementById('valBrandW3')).className = "form-control is-invalid";
        (<HTMLInputElement>document.getElementById('errorValBrandW3')).style.display = "block";
     } else {
        (<HTMLInputElement>document.getElementById('valBrandW3')).className = "form-control is-valid";
        (<HTMLInputElement>document.getElementById('errorValBrandW3')).style.display = "none"; 
       }
    if(brandW4  == "") {
        checkBrand = false; 
        (<HTMLInputElement>document.getElementById('valBrandW4')).className = "form-control is-invalid";
        (<HTMLInputElement>document.getElementById('errorValBrandW4')).style.display = "block";
     } else {
        (<HTMLInputElement>document.getElementById('valBrandW4')).className = "form-control is-valid";
        (<HTMLInputElement>document.getElementById('errorValBrandW4')).style.display = "none"; 
       }
    
    if(checkDiameter == true && checkBrand == true) {
        for (let i = 0; i < arrayCars.length; i++){
            var wheel = new Wheel(diameterW1, brandW1);
            var wheel2 = new Wheel(diameterW2, brandW2);
            var wheel3 = new Wheel(diameterW3, brandW3);
            var wheel4 = new Wheel(diameterW4, brandW4);
            arrayCars[i].wheels.push(wheel, wheel2, wheel3, wheel4);

            /************* Result (hidden "WheelsForm" and show "wheelsInfo") ******************/
            (<HTMLInputElement>document.getElementById('infoBrandW1')).innerText = "BRAND: " + wheel.brand;
            (<HTMLInputElement>document.getElementById('infoDiameterW1')).innerText = "DIAMETER: " + wheel.diameter;
            (<HTMLInputElement>document.getElementById('infoBrandW2')).innerText = "BRAND: " + wheel2.brand;
            (<HTMLInputElement>document.getElementById('infoDiameterW2')).innerText = "DIAMETER: " + wheel2.diameter;
            (<HTMLInputElement>document.getElementById('infoBrandW3')).innerText = "BRAND: " + wheel3.brand;
            (<HTMLInputElement>document.getElementById('infoDiameterW3')).innerText = "DIAMETER: " + wheel3.diameter;
            (<HTMLInputElement>document.getElementById('infoBrandW4')).innerText = "BRAND: " + wheel4.brand;
            (<HTMLInputElement>document.getElementById('infoDiameterW4')).innerText = "DIAMETER: " + wheel4.diameter;
            (<HTMLInputElement>document.getElementById('WheelsForm')).style.display = "none";
            (<HTMLInputElement>document.getElementById('wheelsInfo')).style.display = "block";
            //Clear Inputs
            (<HTMLInputElement>document.getElementById('valDiameterW1')).value = '';
            (<HTMLInputElement>document.getElementById('valBrandW1')).value = '';
            (<HTMLInputElement>document.getElementById('valDiameterW2')).value = '';
            (<HTMLInputElement>document.getElementById('valBrandW2')).value = '';
            (<HTMLInputElement>document.getElementById('valDiameterW3')).value = '';
            (<HTMLInputElement>document.getElementById('valBrandW3')).value = '';
            (<HTMLInputElement>document.getElementById('valDiameterW4')).value = '';
            (<HTMLInputElement>document.getElementById('valBrandW4')).value = '';
            jump();
        }
    }
}


/*****************************************************************************************************/
/************************************* Jump to anchor ************************************************/
/*****************************************************************************************************/

function jump(){
    var top = (<HTMLInputElement>document.getElementById("carInfo")).offsetTop; 
    window.scrollTo(0, top);                        
}​
