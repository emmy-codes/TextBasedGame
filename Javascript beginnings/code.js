var firstName = 'Emma';
var age = 14;

// line 5 is essentially the IF statement. Ternary operator:
age >= 18 ? console.log(firstName + ' can have some mead.')
// line 7 is essentially the ELSE IF statement
: console.log(firstName + ' can only have juice.');

// lines 10 and 11 are the same as writing 13 to 17. much shorter! but more advanced
var drink = age >= 18 ? 'mead' : 'juice';
console.log(drink);

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

// switch statement:

var job = 'studying'; // if job = 'student'
switch (job) {
    case 'student': // else if 
    case 'studying':
        console.log(firstName + ' is a student learning programming.');
        break;
    case 'driver': // else if
        console.log(firstName + ' drives a taxi for a living.');
        break;
    case 'artist': // else if
        console.log(firstName + ' creates works of art.');
        break;
    default: // else
            console.log(firstName + ' is secretive.');
}


switch (true) { /* instead of switch being the variable of 'job' it is the
boolean statement of 'true' whichever of the following statements is true
is the one that will execute. Anything outside the age range uses the
default result */
    case age < 13:
        console.log(firstName + ' is a girl.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young woman.');
        break;
    default:
        console.log(firstName + ' is a woman.');
}