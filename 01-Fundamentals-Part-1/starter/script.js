// let js = 'amazing';
// if (js == 'amazing') alert('hey alert');
// console.log(1 + 2 + 3)

/*
let firstName = 'hatim';
console.log(firstName);
let PI = 3.14;
console.log(PI);
PI = 3.15;
console.log(PI);
*/

// let numVar = 1;
// let strVar = "hatim";

// console.log(typeof numVar);
// console.log(typeof strVar);
// //in js it is not the variable that holds type but it is the value that define the type

// //dynamic typing example
// let undefVar;
// console.log(typeof undef);

// undefVar = 'hatim';
// console.log(typeof undefVar);

// //bugs of js but not corrected because of legacy reasons

// console.log(typeof null);

// let boolean = true;
// console.log(typeof boolean);


// let bool = 2002 - 2001 > 2002 - 1998
// console.log(bool)
// let x, y;
// x = y = 25 - 10 - 10;
// console.log(x, y)

// let a, b;
// a = b = 10;

// console.log(a + b / 2)

// let markMass, johnMass, markHeight, johnHeight, markBmi, johnBmi;

// let markHigherBmi;
// markMass = 78;
// johnMass = 92;
// markHeight = 1.69;
// johnHeight = 1.95;
// markBmi = markMass / (markHeight * markHeight);
// johnBmi = johnMass / (johnHeight * johnHeight)

// markHigherBmi = markBmi > johnBmi;
// console.log(markHigherBmi)

// markMass = 95;
// johnMass = 85;
// markHeight = 1.88;
// johnHeight = 1.76;

// markBmi = markMass / (markHeight * markHeight);
// johnBmi = johnMass / (johnHeight * johnHeight)

// markHigherBmi = markBmi > johnBmi;
// console.log(markHigherBmi)

// myName = 'hatim';
// myProfession = 'web developer ';
// bornYear = 2002;
// currentYear = 2023;

// let normalString = "I'M " + myName + " a" + myProfession + " of" + (currentYear - bornYear) + " age";
// console.log(normalString);

// let templateString = `i'm ${myName} a ${myProfession} of ${currentYear - bornYear} age`;
// console.log(templateString);

// console.log(`my name isd
// hatim`)

// currentAge = 17;
// if (currentAge >= 18) {
//     console.log(`you can drive 😀`);
// }
// else {
//     console.log(`wait for another ${18 - currentAge} years`)
// }

// let yourAD;
// let birthYear = 2012;

// if (birthYear >= 2000) {
//     yourAD = 20;
// }
// else {
//     yourAD = 19;
// }
// console.log(yourAD);

// let markMass, johnMass, markHeight, johnHeight, markBmi, johnBmi;

// let markHigherBmi;
// markMass = 78;
// johnMass = 92;
// markHeight = 1.69;
// johnHeight = 1.95;
// markBmi = markMass / (markHeight * markHeight);
// johnBmi = johnMass / (johnHeight * johnHeight)

// if (markBmi > johnBmi) {
//     console.log(`   Mark's BMI ${markBmi} is more than John's BMI ${johnBmi}`)
// }
// else {
//     console.log(`John's BMI ${johnBmi} is more than Mark's BMI ${markBmi}`)

// }

//TYPE CONVERSIOPN OR EXPLICITLY DONE BY DEVELOPER

// let value = '1991';
// console.log(value, Number(value));

// let value2 = "hatim"
// console.log(typeof Number(value2))

// console.log(String(23), 23)

//type cohersiopn : when type casting is handeled by javascript itself only 
console.log('23' - 1 + '1')

//note 1: + will convert the int value to string

//note 1: and other remaining operators will convert string to int 

//note: falsy values : false,0,undefined,'',NaN,null

// money = 0;
// if (money) {
//     console.log("bhikhari nathi")
// }
// else {
//     console.log("tu bhikhari")
// }

/*
== less strict and do type coherence
=== more strict and not do type coherence  
*/

// let promptValue = Number(prompt('enter a number '))
//     ;
// if (promptValue == 9) {
//     console.log("value is 9 (less strict)");
// }
// if (promptValue === 9) {
//     console.log("value is 9 (strict)")
// }


// if (promptValue != 9) {
//     console.log("value is not 9(less srtict)");
// }
// if (promptValue !== 9) {
//     console.log("value is not 9(srtict)");
// }


// hasDrivingLicense = true;
// hasGoodVision = true;
// if (hasDrivingLicense || !hasGoodVision) {
//     console.log("you can drive");
// }
// else {
//     console.log("someone else should drive");
// }

//challenge 2

// let dolphinScore1 = 96, dolphinScore2 = 108, dolphinScore3 = 89;
// let koalasScore1 = 88, koalasScore2 = 91, koalasScore3 = 110;

// let averageDolphinScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3
// let averageKoalasScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3

// if (averageDolphinScore === averageKoalasScore) {
//     if (averageDolphinScore >= 100) {
//         console.log("tie bothn win");
//     }
//     else {
//         console.log("tie but no win as minimum score is not achieved");
//     }
// }

// else if (averageDolphinScore > averageKoalasScore) {
//     if (averageDolphinScore >= 100) {
//         console.log("dolphin wins as it higher score and thrteshold reaxched", averageDolphinScore);
//     }
//     else {
//         console.log("dolphin has higher score but threshold not achieved", averageDolphinScore);
//     }
// }
// else {
//     if (averageKoalasScore >= 100) {
//         console.log("koalas wins as it higher score and thrteshold reaxched");
//     }
//     else {
//         console.log("koalas has higher score but threshold not achieved");
//     }

// }

// const weekday = "monday"

// switch (weekday) {
//     case "monday":
//         console.log("do initial stuffs");
//         break;
//     case "tuesday":
//         console.log("do coding");
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("do bathing");
//         break;
//     case "friday":
//         console.log("do nail cutting");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("do nothing");
//         break;
//     default:
//         console.log("enter valid day");
//         break;
// }

// const age = 18;
// console.log(`you can drive ${age >= 18 ? 'car' : 'bicycle '}`);

billAmount = Number(prompt("enter the bill amount"));
tip = billAmount > 50 && billAmount < 300 ? ((billAmount * 0.15)) : ((billAmount * 0.20))
console.log(`the bill was ${billAmount},the tip was ${tip},and the total value ${billAmount + tip}`);