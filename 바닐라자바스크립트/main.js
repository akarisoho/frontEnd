// 1. Use Strict (added ES5) => Vanilla JavaScript
'use strict';
console.log('Hello Strict World!');


// 2. Variable(변수) : let (added ES6) : 변하는 값
let globalName = 'Byeil-i';
{
    let letName = '별이';
    var varName = '구르미'
    // console.log("let letName : " + letName);
    // console.log("var varName : " + varName);
    // console.log("let globalName : " + globalName);
    console.log(`let letName : ${letName}`);
    console.log(`var varName : ${varName}`);
    console.log(`let globalName : ${globalName}`);
}
// console.log("let letName : " + letName); //error
console.log(`var varName : ${varName}`);
console.log(`let globalName : ${globalName}`);


// 3. const(상수) (added ES6) : 변하지 않는 값
let daysOfMonth = 30;
console.log(`daysOfMonth : ${daysOfMonth}`);
const daysOfWeek = 7;
console.log(`daysOfWeek : ${daysOfWeek}`);

daysOfMonth = 28;
console.log(`daysOfMonth : ${daysOfMonth}`);
// daysOfWeek = 6;  //error
console.log(`daysOfWeek의 값은 바꿀 수 없음 : ${daysOfWeek}`);


//  4. Variable types : 자료형
// number, string, boolean, null, undefined, symbol, object
// function, class

/*********** C언어의 자료형 *************/
/*  int main(){                         */
/*      short a = 12;        // 2bytes  */
/*      int b = 12;          // 4bytes  */
/*      long c = 1234;       // 8bytes  */
/*      float d = 1.2f;     // 4bytes   */
/*      double e = 9.2;     // 8bytes   */
/*      return 0;                       */
/*  }                                   */
/****************************************/

/*************** Java언어의 자료형 *******************/
/*  class Main(){                                   */
/*      public static void main(String[] args){     */
/*          byte a = 12;        // 8bit = 1byte     */
/*          short b = 12;       // 16bit = 2bytes   */
/*          int c = 12;         // 32bit = 4bytes   */
/*          long d = 1234;      // 64bit = 8bytes   */
/*          float e = 1.2f;     // 32bit = 4bytes   */
/*          double f = 9.2;     // 64bit = 8bytes   */
/*      }                                           */
/*  }                                               */
/****************************************************/

// number type(숫자형)
const intType = 12;     //정수형
console.log(`intType value: ${intType}, type: ${typeof intType}`);

const doubleType = 12.5;    //실수형
console.log(`doubleType value: ${doubleType}, type: ${typeof doubleType}`);


// string type(문자형)
const char = 'a';                       //문자
console.log(`char : ${char}, type : ${typeof char}`);

const myName = 'alicia';               //문자열
console.log(`myName : ${myName}, type : ${typeof myName}`);

const sayHello = 'hello' + myName;      //문자열 + 변수
console.log(`sayHello : ${sayHello}, type : ${typeof sayHello}`);

const templateLiterals = `hi ${myName}`;//template 문자열
console.log(`templateLiterals : ${templateLiterals}, type : ${typeof templateLiterals}`);

// boolean type(불|불린형)
const boolType = true;
const operatorVar = 5 < 1;  //false
console.log(`boolType : ${boolType}, type : ${typeof boolType}`);
console.log(`operatorVar : ${operatorVar}, type : ${typeof operatorVar}`);

// null(값이 없는 상태)
const empty = null;
console.log(`empty : ${empty}, type : ${typeof empty}`);

// undefined(값이 없는 상태)
//const는 값을 재할당할 수 없으므로 선언과 동시에 값을 주어야 함
let notDefined;     
console.log(`notDefined : ${notDefined}, type : ${typeof notDefined}`);


// special type(특별한 자료형)
const infinity = 1 / 0;     //양의 무한대 수
console.log(infinity);

const negativeInfinity = -1 / 0;   //음의 무한대 수
console.log(negativeInfinity);

const num = Number("12.5");      // 문자를 숫자로 형변환 => 숫자로 표현
console.log(`num : ${num}, type : ${typeof num}`);

const nAn = Number("12,5");     // 문자를 숫자로 형변환 => 숫자로 표현할 수 없음
console.log(`nAn : ${nAn}, type : ${typeof nAn}`);

const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value : ${bigInt}, type: ${typeof bigInt}`);


/* null과 undefined는 둘다 값이 없는 상태이므로 
    ==(동등연산자:값을 비교)으로 비교하면 true가 나오지만 
    ===(엄격한 동등 연산자(일치 연산자):자료형을 비교)으로 비교하면 자료형이 다르므로 false가 나옴 */
let result1 = empty == notDefined;  
let result2 = empty === notDefined;
console.log(`result1 : ${result1}, result2 : ${result2}`);

//  symbol type : 객체의 고유 식별자 생성(유일성이 보장되어야 함 - overwrite금지)
let student_id = Symbol('id');
let teacher_id = Symbol('id');
console.log(`동등 비교 : ${student_id == teacher_id}`);
console.log(`엄격한 동등 비교 : ${student_id === teacher_id}`);

const student = {
    fullName : 'Jang, Ye-jin',
    age : 20,
    age : 25,
};
console.log(student);

const student2 = {
    [Symbol("fullName")] : 'Jang Ye-jin',
    [Symbol("age")] : 20,
    [Symbol("age")] : 25
};
// console.log(student2);   //심벌은 열거 불가 - for in문도 사용 불가함
// Object.getOwnPropertySymbols() => 지정된 객체에서 배열의 키값을 반환 
let studentInfo = Object.getOwnPropertySymbols(student2);
console.log(studentInfo);

// .map() => 키 - 값 쌍을 보유하고있는 키의 원래의 삽입 순서를 기억
let studentValue = studentInfo.map(symbol => student2[symbol]);
console.log(`studentValue : ${studentValue}`);

const addGender1 = Symbol('gender');
const addGender2 = Symbol('gender');
student2[addGender1] = '여';
student2[addGender2] = '남';
console.log(`student2.addGender : ${student2.addGender}, student2.gender : ${student2.gender}`);

studentInfo = Object.getOwnPropertySymbols(student2);
console.log(studentInfo);

studentValue = studentInfo.map(symbol => student2[symbol]);
console.log(`studentValue : ${studentValue}`);


let test1 = 1;
let test2 = 3;
console.log(test1 !== test2);