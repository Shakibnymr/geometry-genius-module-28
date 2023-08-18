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
function calculateParallelogramArea(){
const base = getValue('parallelogram-base');
const height = getValue('parallelogram-height');
const area = base * height;
SetValue('parallelogram-area',area)
}
function calculateRhombusArea(){
const d1 = getValue('rhombus-d1');
const d2 = getValue('rhombus-d2');
const area = 0.5 * d1 * d2;
SetValue('rhombus-area',area)
}
function calculatePentagonArea(){
const p = getValue('pentagon-p');
const b = getValue('pentagon-b');
const area = 0.5 * p * b;
SetValue('pentagon-area',area)
}
function calculateEllipseArea(){
const a = getValue('ellipse-a');
const b = getValue('ellipse-b');
const area = 3.1416 * a * b;
const area1 =area.toFixed(2);
SetValue('ellipse-area',area1)
}