'use strict';  // 엄격모드

let greetings = '안녕하세요';
let myName = '별이구르미';

console.log( greetings + "! 제 이름은" + myName + "입니다.");

//백틱을 이용한 템플릿리터럴 사용
console.log(`${greetings}! 제 이름은 ${myName} 입니다.`);

let x = 4;
let y = 3;

console.log( x + " * " + y + "는" + x*y + "입니다.");

//백틱을 이용한 템플릿리터럴 사용
console.log(`${x} * ${y}는 ${x * y} 입니다.`);

//ES6 이전
var text = "안녕하세요, \
별이구르미 입니다. \
우리 화이팅해요!\ " ;

//ES6 이후
const paragragh = `안녕하세요,
별이구르미 입니다.
우리 화이팅해요!" `;