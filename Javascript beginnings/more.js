function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageEmma = calculateAge(1986);
var ageMum = calculateAge(1962);
var ageGranny = calculateAge(1940);

console.log(ageEmma, ageMum, ageGranny);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 70 - age;
    
    if (retirement > 0) {
     console.log(firstName + ' retires in ' + retirement + ' years.');
} else {
    console.log(firstName + ' is already retired.');
}
}

yearsUntilRetirement(1986, 'Emma');
yearsUntilRetirement(1962, 'Mum');
yearsUntilRetirement(1940, 'Granny');