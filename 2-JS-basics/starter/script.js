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

/*-------------------
*Arrays
---------------------*/
/*
var names = ['Juan', 'Marcos', 'Jess'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

//mutate data
names[1] = 'Ben';
names[names.length] = 'Mary';

console.log(names);


//Diferents data types

/*
var john =['John', 'Smith', 1990, 'designer', false]

john.push('blue'); // add an element to end of array
john.unshift('Mr. '); // add an element to start of array
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);


console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
console.log(isDesigner);
*/

/*-------------------
*CODING CHALLENGE 3
---------------------*/
/*
//TIP CALCULATOR    
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill => 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;

}

//console.log(tipCalculator(300));

var bills = [ 124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])]
var totales = [bills[0] + tips[0],
                bills[1] + tips[1],
                bills[2] + tips[2],]

console.log(tips, totales);

*/

/*-------------------
*OBJECTS AND PROPERTIES
---------------------*/
/*
//object literal
    //(objeto) 
var john = {
    //propiedades
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob'],
    job: 'Teacher',
    isMarried: false
}
         //(objeto.propiedad)
console.log(john.lastName);
console.log(john['job']);

var x = 'birthYear';

console.log(john['birthYear']);

john.job = 'designer';
john['isMarried'] = true;

console.log(john);


//new Object syntax

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = '1960';
jane['lastName'] = 'Smith';
console.log(jane);

*/

/*-------------------
*OBJECTS AND METHODS
---------------------*/

/*
var john = {
    //propiedades
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob'],
    job: 'Teacher',
    isMarried: false,
    calcAge: function(){  //method
        //return 2019 - this.birthYear;
        this.age = 2019 - this.birthYear;

    }
};

//console.log(john.calcAge(1990));
//john.calcAge();

console.log(john.family);

var family1 = john.family[0]; 
var family2 = john.family[1]; 
var family3 = john.family[2]; 

console.log(family1);
console.log(family2);
console.log(family3);
*/

/*-------------------
*CODING CHALLENGE 3
---------------------*/
/*
var john = {
    fullName: 'John Smith',
    mass: 72,
    height: 1.82,
    calcBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    fullName: 'Mark Doe',
    mass: 82,
    height: 1.75,
    calcBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};


console.log(john);
console.log(mark);

if (john.calcBmi() > mark.calcBmi()) {
        console.log(john.fullName + ' has the bigest BMI ' + john.bmi)
}  else if (mark.calcBmi() > john.calcBmi()) {
        console.log(john.fullName + ' has the bigest BMI ' + mark.bmi)
} else {
     console.log('Mark and John have the same BMI')
}*/

/*-------------------
*LOOPS AND ITERATION    
---------------------*/
/*

//for loop
for (var i = 0; i <= 10; i += 2) {
    console.log(i);
}

var john =['John', 'Smith', 1990, 'designer', false]

for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}



//whilw loop
var john =['John', 'Smith', 1990, 'designer', false]

var i = 0;
while (i < john.length){
    console.log(john[i]);
    i++;
}


//continue and break statments
var john =['John', 'Smith', 1990, 'designer', false, 'blue']

for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

//looping backguards
for (var i = john.length - 1; i >= 0; i--){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
*/

/*-------------------
*CODE CHALLENGE 5   
---------------------*/

/*
//TIP CALCULATOR    
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill => 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;

}

//console.log(tipCalculator(300));

var bills = [ 124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])]
var totales = [bills[0] + tips[0],
                bills[1] + tips[1],
                bills[2] + tips[2],]

console.log(tips, totales);

*/

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTip: function(){
        this.tips = [];
        this.totals = [];
        for (var i = 0; i < this.bills.length; i++){
           //determine percent
            var percentage;
            var bill = this.bills[i];

            if(bill < 50){
                percentage = .2;
            } else if (bill > 50 && bill < 200){
                percentage = .15;
            }else {
                percentage = .1;
            }
           //add results
           this.tips[i] = bill * percentage;
           this.totals[i] = bill + bill * percentage;
        }
    },
}



var mark = {
    fullName: 'Mark Doe',
    bills: [77, 475, 110, 45],
    calcTip: function(){
        this.tips = [];
        this.totals = [];
        for (var i = 0; i < this.bills.length; i++){
           //determine percent
            var percentage;
            var bill = this.bills[i];

            if(bill < 100){
                percentage = .2;
            } else if (bill > 100 && bill < 300){
                percentage = .1;
            }else {
                percentage = .25;
            }
           //add results
           this.tips[i] = bill * percentage;
           this.totals[i] = bill + bill * percentage;
        }
    },
}

function calcAverage (tips){
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

//calculations

john.calcTip();
mark.calcTip();
console.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

mark.random = calcAverage(mark.bills);

console.log(john, mark);

if ( john.average > mark.average){
    console.log('Johns family pays more');
}else{
    console.log('Marks family is insane');
}