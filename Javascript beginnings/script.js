/*
var firstName = 'Emma';
console.log(firstName);

var lastName = 'Scott-Allen';
var age = 34;
var fullAge = true;
console.log(fullAge);

var job;
job = 'Student';
console.log(job);

var firstName = 'Emma';
var lastName = 'Scott-Allen';
var age = 34;

console.log('My name is ' + firstName + ', and I am' + ' ' + age + ' years old.')

prompt('Are you sure you want to eat this? Someone else may need it more than you.');
*/

// Operators are like functions but are written  in a special way

/* var year, yearEmma, ageEmma;
year = 2020;
// current age (sadface)
ageEmma = 34;
// current year minus my age = my DOB
yearEmma = year - ageEmma;
console.log(yearEmma);

var emmaMummy = ageEmma + 2;
console.log(emmaMummy);
*/

/* var now = 2020;
var yearEmma = 1986;
var grownUp = 18;

/* operators below! minus, and greater than or equal to, minus sign has precedence
over greater than or equal to so will calculate first */
/* var isGrownUp = now - yearEmma >= grownUp;

console.log(isGrownUp);

var ageEmma = now - yearEmma;
var ageVini = 31;

/* divide sign has precedence over addition sign. Add brackets in order to
boost the precedence of ageEmma plus ageVini to come before divided by 2 */
var average = (ageEmma + ageVini) / 2;
console.log(average);
// multiple assignments

/* var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// left to right operators: 2 + 4 + 5

// right to left operator ex. Assignment. Reads = y = 26, THEN x = y

// More operators

/* these two do the exact same thing!
x = x * 2;
x *= 2;
will do x * 2 without having to write it */

/* 

x *= 2;
console.log(x);
x += 10;
console.log(x);*/

/* x = x + 1;
   x =+ 1;
   x ++
   these all do exactly the same thing, but the ++ is just adding one number. */


   var markMass = 90;
var johnMass = 80;
var markHeight = 1.9;
var johnHeight = 2.2;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

var BMI = johnBMI > markBMI;

console.log('Is Mark\'s BMI higher than John\'s? ' + BMI);

var firstName = 'Emma';
var civilStatus = 'sambo';

// logical operation that returns true or false
if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
}
else {
    console.log(firstName + ' will get married soon!')
}

var isMarried = true;

if (isMarried) { // you don't need the === part here because isMarried is already a Boolean
    console.log(firstName + ' is married!');
}
else {
    console.log(firstName + ' will get married soon!')
}

var markMass = 90;
var johnMass = 150;
var markHeight = 1.9;
var johnHeight = 2.2;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

var BMI = johnBMI > markBMI;

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s.')
} else {
    console.log('John\'s BMI is higher than Mark\'s.')
}

/***********
 * lesson about if, else if, AND && OR || and NOT !
 * var firstName = 'Emma';
var age = 24;

if (age < 13) {
    console.log(firstName + ' is a girl');
} else if (age >= 13 && age < 20) { /* between 13 and 20 would be age greater 
    than or equal to 13 and less than 20: age >= 13 AND age < 20 
    Precedence: the && and  || operators have a lower precedence
    since we want  the greater than or equal to 13 to run first
    console.log(firstName + ' is a teenager');
}  else  if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young woman')
} else {
    console.log(firstName + ' is a woman');
} */