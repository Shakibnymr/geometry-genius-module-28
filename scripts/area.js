function getValue(inputId){
    const getId = document.getElementById(inputId);
    const getInnerValue = getId.value;
    const value = parseFloat(getInnerValue);
    return value
}
function getInnerText(Id){
    const GetId =document.getElementById(Id);
    const GetInnerText = GetId.innerText;
    const innerText = parseFloat(GetInnerText);
return innerText
}
function SetValue(Id, Input){
const find = document.getElementById(Id);
find.innerText = Input;
}

function calculateTriangleArea(){
    // get triangle base value
    // const baseField = document.getElementById('triangle-base');
    // const baseValueText = baseField.value;
    // const base = parseFloat(baseValueText);
const base = getValue('triangle-base');
    // get triangle height value
    // const heightField = document.getElementById('triangle-height');
    // const heightValueText = heightField.value;
    // const height = parseFloat(heightValueText);
    const height = getValue('triangle-height');

    const area = 0.5 * base * height
    console.log(area);
    
    // show area
   SetValue('triangle-area',area)
}

function calculateRectangleArea(){
const width = getValue('rectangle-width');
const length = getValue('rectangle-length');
const area = width * length;
SetValue('rectangle-area',area)
}