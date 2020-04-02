"use strict";
/*****************************************************************************************************/
/**************************************** Form Cars **************************************************/
/*****************************************************************************************************/
var arrayCars = [];
var arrayWheels = [];
function createCar(plate, brand, color) {
    plate = document.getElementById('valPlate').value;
    color = document.getElementById('valColor').value;
    brand = document.getElementById('valBrand').value;
    var checkPlate = false;
    //check plate
    var expReg = /^((\d{4}\s[A-Z a-z]{3}))|((\d{4}[A-Z a-z]{3}))$/g;
    if (expReg.test(plate)) {
        checkPlate = true;
        document.getElementById('valPlate').className = "form-control is-valid";
        document.getElementById('errorValPlate').style.display = "none";
    }
    else {
        if (plate == "") {
            checkPlate = false;
            document.getElementById('valPlate').className = "form-control is-invalid";
            document.getElementById('errorValPlate').style.display = "block";
        }
        else {
            checkPlate = false;
            document.getElementById('errorValPlate').innerHTML = "FORMAT: 4 NUM AND 3 LETTERS";
            document.getElementById('errorValPlate').style.display = "block";
        }
    }
    //check plate
    if (color == "") {
        checkPlate = false;
        document.getElementById('valColor').className = "form-control is-invalid";
        document.getElementById('errorValColor').style.display = "block";
    }
    else {
        document.getElementById('valColor').className = "form-control is-valid";
        document.getElementById('errorValColor').style.display = "none";
    }
    //check plate
    if (brand == "") {
        checkPlate = false;
        document.getElementById('valBrand').className = "form-control is-invalid";
        document.getElementById('errorValBrand').style.display = "block";
    }
    else {
        document.getElementById('valBrand').className = "form-control is-valid";
        document.getElementById('errorValBrand').style.display = "none";
    }
    if (checkPlate == true) {
        checkPlate = false;
        var car = new Car(plate, color, brand);
        arrayCars.push(car);
        /**** Result (hidden "CarsForm" and show "carInfo" & "WheelsForm") ****/
        document.getElementById('infoPlate').innerText = "PLATE: " + car.plate;
        document.getElementById('infoColor').innerText = "COLOR: " + car.color;
        document.getElementById('infoBrand').innerText = "BRAND: " + brand;
        document.getElementById('CarsForm').style.display = "none";
        document.getElementById('carInfo').style.display = "block";
        document.getElementById('WheelsForm').style.display = "block";
        document.getElementById('valPlate').value = '';
        document.getElementById('valColor').value = '';
        document.getElementById('valBrand').value = '';
    }
}
/*****************************************************************************************************/
/************************************** Form Wheels **************************************************/
/*****************************************************************************************************/
function createWheels() {
    //wheel1
    var valueDiameterW1 = document.getElementById('valDiameterW1').value;
    var diameterW1 = parseInt(valueDiameterW1);
    var brandW1 = document.getElementById('valBrandW1').value;
    //wheel2
    var valueDiameterW2 = document.getElementById('valDiameterW2').value;
    var diameterW2 = parseInt(valueDiameterW2);
    var brandW2 = document.getElementById('valBrandW2').value;
    //wheel3
    var valueDiameterW3 = document.getElementById('valDiameterW3').value;
    var diameterW3 = parseInt(valueDiameterW3);
    var brandW3 = document.getElementById('valBrandW3').value;
    //wheel4
    var valueDiameterW4 = document.getElementById('valDiameterW4').value;
    var diameterW4 = parseInt(valueDiameterW4);
    var brandW4 = document.getElementById('valBrandW4').value;
    //Checked Diameter
    var checkDiameter = true;
    if (diameterW1 > 0.4 && diameterW1 < 2) {
        document.getElementById('valDiameterW1').className = "form-control is-valid";
        document.getElementById('errorValDiameterW1').style.display = "none";
    }
    else {
        checkDiameter = false;
        if (valueDiameterW1 == "") {
            document.getElementById('valDiameterW1').className = "form-control is-invalid";
            document.getElementById('errorValDiameterW1').style.display = "block";
        }
        else {
            document.getElementById('valDiameterW1').className = "form-control is-invalid";
            document.getElementById('errorValDiameterW1').innerHTML = "DIAMETER: d > 0.4 & d < 2 ";
            document.getElementById('errorValDiameterW1').style.display = "block";
            alert("WHEEL DIAMETER 1 IS NOT CORRECT");
        }
    }
    if (diameterW2 > 0.4 && diameterW2 < 2) {
        document.getElementById('valDiameterW2').className = "form-control is-valid";
        document.getElementById('errorValDiameterW2').style.display = "none";
    }
    else {
        checkDiameter = false;
        if (valueDiameterW2 == "") {
            document.getElementById('valDiameterW2').className = "form-control is-invalid";
            document.getElementById('errorValDiameterW2').style.display = "block";
        }
        else {
            document.getElementById('valDiameterW2').className = "form-control is-invalid";
            document.getElementById('errorValDiameterW2').innerHTML = "DIAMETER: d > 0.4 & d < 2 ";
            document.getElementById('errorValDiameterW2').style.display = "block";
            alert("WHEEL DIAMETER 2 IS NOT CORRECT");
        }
    }
    if (diameterW3 > 0.4 && diameterW3 < 2) {
        document.getElementById('valDiameterW3').className = "form-control is-valid";
        document.getElementById('errorValDiameterW3').style.display = "none";
    }
    else {
        document.getElementById('valDiameterW2').className = "form-control is-invalid";
        checkDiameter = false;
        if (valueDiameterW3 == "") {
            document.getElementById('valDiameterW3').className = "form-control is-invalid";
            document.getElementById('errorValDiameterW3').style.display = "block";
        }
        else {
            document.getElementById('valDiameterW3').className = "form-control is-invalid";
            document.getElementById('errorValDiameterW3').innerHTML = "DIAMETER: d > 0.4 & d < 2 ";
            document.getElementById('errorValDiameterW3').style.display = "block";
            alert("WHEEL DIAMETER 3 IS NOT CORRECT");
        }
    }
    if (diameterW4 > 0.4 && diameterW4 < 2) {
        document.getElementById('valDiameterW4').className = "form-control is-valid";
        document.getElementById('errorValDiameterW4').style.display = "none";
    }
    else {
        checkDiameter = false;
        if (valueDiameterW4 == "") {
            document.getElementById('valDiameterW4').className = "form-control is-invalid";
            document.getElementById('errorValDiameterW4').style.display = "block";
        }
        else {
            document.getElementById('valDiameterW4').className = "form-control is-invalid";
            document.getElementById('errorValDiameterW4').innerHTML = "DIAMETER: d > 0.4 & d < 2 ";
            document.getElementById('errorValDiameterW4').style.display = "block";
            alert("WHEEL DIAMETER 4 IS NOT CORRECT");
        }
    }
    //Checked Brand
    var checkBrand = true;
    if (brandW1 == "") {
        checkBrand = false;
        document.getElementById('valBrandW1').className = "form-control is-invalid";
        document.getElementById('errorValBrandW1').style.display = "block";
    }
    else {
        document.getElementById('valBrandW1').className = "form-control is-valid";
        document.getElementById('errorValBrandW1').style.display = "none";
    }
    if (brandW2 == "") {
        checkBrand = false;
        document.getElementById('valBrandW2').className = "form-control is-invalid";
        document.getElementById('errorValBrandW2').style.display = "block";
    }
    else {
        document.getElementById('valBrandW2').className = "form-control is-valid";
        document.getElementById('errorValBrandW2').style.display = "none";
    }
    if (brandW3 == "") {
        checkBrand = false;
        document.getElementById('valBrandW3').className = "form-control is-invalid";
        document.getElementById('errorValBrandW3').style.display = "block";
    }
    else {
        document.getElementById('valBrandW3').className = "form-control is-valid";
        document.getElementById('errorValBrandW3').style.display = "none";
    }
    if (brandW4 == "") {
        checkBrand = false;
        document.getElementById('valBrandW4').className = "form-control is-invalid";
        document.getElementById('errorValBrandW4').style.display = "block";
    }
    else {
        document.getElementById('valBrandW4').className = "form-control is-valid";
        document.getElementById('errorValBrandW4').style.display = "none";
    }
    if (checkDiameter == true && checkBrand == true) {
        for (var i = 0; i < arrayCars.length; i++) {
            var wheel = new Wheel(diameterW1, brandW1);
            var wheel2 = new Wheel(diameterW2, brandW2);
            var wheel3 = new Wheel(diameterW3, brandW3);
            var wheel4 = new Wheel(diameterW4, brandW4);
            arrayCars[i].wheels.push(wheel, wheel2, wheel3, wheel4);
            /************* Result (hidden "WheelsForm" and show "wheelsInfo") ******************/
            document.getElementById('infoBrandW1').innerText = "BRAND: " + wheel.brand;
            document.getElementById('infoDiameterW1').innerText = "DIAMETER: " + wheel.diameter;
            document.getElementById('infoBrandW2').innerText = "BRAND: " + wheel2.brand;
            document.getElementById('infoDiameterW2').innerText = "DIAMETER: " + wheel2.diameter;
            document.getElementById('infoBrandW3').innerText = "BRAND: " + wheel3.brand;
            document.getElementById('infoDiameterW3').innerText = "DIAMETER: " + wheel3.diameter;
            document.getElementById('infoBrandW4').innerText = "BRAND: " + wheel4.brand;
            document.getElementById('infoDiameterW4').innerText = "DIAMETER: " + wheel4.diameter;
            document.getElementById('WheelsForm').style.display = "none";
            document.getElementById('wheelsInfo').style.display = "block";
            //Clear Inputs
            document.getElementById('valDiameterW1').value = '';
            document.getElementById('valBrandW1').value = '';
            document.getElementById('valDiameterW2').value = '';
            document.getElementById('valBrandW2').value = '';
            document.getElementById('valDiameterW3').value = '';
            document.getElementById('valBrandW3').value = '';
            document.getElementById('valDiameterW4').value = '';
            document.getElementById('valBrandW4').value = '';
            jump();
        }
    }
}
/*****************************************************************************************************/
/************************************* Jump to anchor ************************************************/
/*****************************************************************************************************/
function jump() {
    var top = document.getElementById("carInfo").offsetTop;
    window.scrollTo(0, top);
}
