/*-------------------
* Code Challenge 1
---------------------*/

/*
var marcoWheight = prompt('Cual es el peso de marco?');
var marcoHeight = prompt('Cual es la altura de marco?');
var juanWeight = prompt('Cual es el peso de juan?');
var juanHeight = prompt('Cual es la altura de juan?');

var imcMarco = marcoWheight / (marcoHeight * marcoHeight);
var imcJuan = juanWeight / (juanHeight * juanHeight);
console.log(imcMarco);
console.log(imcJuan);
var imcMayor = imcMarco > imcJuan

console.log('El IMC de Marco es mayor al de Juan?' + ' ' + imcMayor)*/

/*-------------------
*if /else
---------------------*/

/*var firstName = 'Juan';
var civilStatus = 'soltero';

if (civilStatus === 'casado') {
    console.log(firstName + ' es casado')
} else {
    console.log(firstName + ' no es casado')
}*/

/*
var marcoWheight = prompt('Cual es el peso de marco?');
var marcoHeight = prompt('Cual es la altura de marco?');
var juanWeight = prompt('Cual es el peso de juan?');
var juanHeight = prompt('Cual es la altura de juan?');

var imcMarco = marcoWheight / (marcoHeight * marcoHeight);
var imcJuan = juanWeight / (juanHeight * juanHeight);
console.log(imcMarco);
console.log(imcJuan);

//var imcMayor = imcMarco > imcJuan
//console.log('El IMC de Marco es mayor al de Juan?' + ' ' + imcMayor)

if (imcMarco > imcJuan) {
    console.log('Marco tiene mayor IMC');
} else {
    console.log('Juan tiene mayor IMC');
}
*/

/*-------------------
*Boolean logic
---------------------*/

/*
var firstName = 'Marco';
age = prompt('Cuantos años tienes?');

if (age < 12) {
    console.log(firstName + ', eres un niño');
} else if (age >= 12 && age < 18) {
    console.log(firstName + ', eres un adolescente');
} else if(age >= 18 && age < 30){
    console.log(firstName + ', Eres un joven adulto');
}else {
    console.log(firstName + ', Eres un adulto');
}
*/

/*-------------------
*Ternary operators and Switch Statements
---------------------*/
/*
var firstName, age;
firstName = 'Marco';
age = 14;

//Ternary operator

age >= 18 ? console.log(firstName + ' toma cerveza.')
: console.log(firstName + ' toma jugo.');

var drink = age >= 18 ? 'cerveza' : 'jugo';
console.log(drink)

//Switch statement

var job = 'profesor';
switch (job) {
    case 'maestro':
    case 'profesor':
        console.log(firstName + ' da clases');
        break;
    case 'mecanico':
        console.log(firstName + ' repara coches');
        break;
    default:
        console.log(firstName + ' no hace nada')
        break;
}


var age = 14;

switch (true) {
    case age < 13:
        console.log(firstName + ', eres un niño');
        break;
    case age >= 12 && age < 18:
        console.log(firstName + ', eres adolescente');
        break;
    case age >= 18 && age < 30:
        console.log(firstName + ', eres un joven adulto');
        break;
    default:
        console.log(firstName + ', eres un adulto');
        break;
}
*/

/*-------------------
*Second challenge
---------------------*/
/*
var johnTeam = (84 + 120 + 103) / 3;
var mikeTeam = (84 + 120 + 103) / 3;
var maryTeam = (17 + 134 + 105) / 3;

if (johnTeam > mikeTeam && johnTeam > maryTeam) {
    console.log('Johns team is the winer' );
} else if (mikeTeam > johnTeam && mikeTeam > maryTeam) {
    console.log('Mikes team is the winer' );
} else if (maryTeam > johnTeam && maryTeam > mikeTeam) {
    console.log('Mary team is the winer' );
} else{
    console.log('Theres a draw' );
}
*/
/*-------------------
*Functions
---------------------*/
/*
function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
console.log(ageJohn);


function yearsRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' Is retired.');
    }
    
    
}

yearsRetirement(1990, 'John')
yearsRetirement(1941, 'Mike')
yearsRetirement(1983, 'Jean')
*/

/*-------------------
*Function Statements and Expressions
---------------------*/

//Function declaration
//function whatDoYouDo(job, firstName){}

//Function expression
/*
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' enseña codigo';  //return devuelve el valor y finaliza la función
        case 'driver':
            return firstName + ' conduce un Uber';
        case 'designer':
            return firstName + ' diseña paginas web';
        default:
            return firstName + ' hace otra cosa';
    }
};

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/