'use strict';  // 엄격모드.
let globalName = 'Byeil-i';
{
    let letName = '별이';
    var varName = '구르미'
    console.log("let letName : " + letName);
    console.log("var varName : " + varName);
    console.log("let globalName : " + globalName);
}
// console.log("let letName : " + letName); //error
console.log("var varName : " + varName);
console.log("let globalName : " + globalName);

let daysOfMonth = 30;
console.log('daysOfMonth : '+ daysOfMonth);
const daysOfWeek = 7;
console.log('daysOfWeek : ' + daysOfWeek);

daysOfMonth = 28;
console.log('daysOfMonth : ' + daysOfMonth);
daysOfWeek = 6;  //error
console.log('daysOfWeek의 값은 바꿀 수 없음 : ' + daysOfWeek);