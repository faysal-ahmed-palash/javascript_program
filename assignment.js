
// Solution 1
// Inch to Miles Calculation function

function feetF(a) {
    feet = a / 12;
    return feet;
}

function mileF(b) {

    getFeet = feetF(b);
    result = getFeet / 5280;
    console.log("Mile = "+result);
}


mileF(500000);





// Solution 2
// Wood Calculation function

function getQbig(needChair, needTable, needKhat) {
// Qbig Fixed Hisab
chair = 1;
table = 3;
khat = 5;

    needTotal = (needChair * chair + needTable * table + needKhat * khat);
    console.log("Need total qbig feet wood = "+needTotal);

}

//getQbig(5,2,1);



// Solution 3
// Brick calculation
function brickCalculation(a) {
    let perFeet = 1000;
    if (a <= 10) {
        result = a * 15 * perFeet;
        console.log(result);
    }
    else if(a > 10 && a <= 20){
        needbrickupto10 = 10 * 15 * perFeet;
        extraFloor = a - 20;
        extraBrick = extraFloor * 12 * perFeet;
        result = needbrickupto10 + extraBrick;
        console.log(result);

    }
    else if(a>20) {
        needbrickupto10 = 10 * 15 * perFeet;
        needBrickupto20 = 10 * 12 * perFeet;
        extraFloor = a - 20;
        extraBrick = extraFloor * 10 * perFeet;
        result = needbrickupto10 + needBrickupto20 + extraBrick;
        console.log(result);

    }
    else {
        console.log('Sorry, Input correct data');
    }


}

//brickCalculation(22);



// Solution 4
// Array find out small character name


function getsmallname(ss) {
totalArray= ss.length;
//console.log(totalArray);
// console.log(ss[1]);
// n = (ss[0].length);
// console.log(n);
    oldNumber = 0;
    oldName = '';

        for(let i=0; i<totalArray; i++){

            targetNumber = ss[i].length;
            targetName = ss[i];

            newNumber = targetNumber;
            newName = targetName;
            //if (oldNumber == "") { oldNumber = 0;}
            if (newNumber < oldNumber) {
                oldNumber = newNumber;
                oldName = newName;
            } else {
                oldNumber = oldNumber;
                oldName = oldName;

            }
            console.log(oldName);

    }



}

let s1='faysal ahmed';
let s2='ahmed';
let s3='palash';
let s4='babu';
let s5='kamal';

const ss = [s1, s2, s3,s4,s5];
//getsmallname(ss);



// Solution 5
// Decision and take necessry steps

let officeJabo = false;
let cowMeat = false;

if (officeJabo == true) {
    result = ('I am going to Office, So i have to take umbrella');
} else {

    if (cowMeat == true) {
        result = 'I cannot go to Office, so i have to send mail to my office that i am sick!. And i am going to take Lunch with cowmeat and Khichuri';
    } else {
        result = 'I cannot go to Office, so i have to send mail to my office that i am sick!. And i am going to take Lunch with Dimvaji';

    }


}

//console.log(result);