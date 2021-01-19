var name = ('owen');  //s4 name value
const stateNum = 50; //s5
let sum = 5 + 4; //s6

function sayHello() {  //s8
    alert('Hello World');
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        return ('Sorry ' + name + ', you are not old enought to view this page')
    }
}

let charles = {
    name: 'Charles',
    age: 21
}

let abby = {
    name: 'Abby',
    age:  27
}

let james = {
    name: 'James',
    age: 18
}

let john = {
    name: "John",
    age: 17
}

//dot notation
checkAge(charles.name, charles.age);
checkAge(abby.name, abby.age);
checkAge(john.name, john.age);
checkAge(james.name, james.age);

var veggies = ['kale', 'carrot', 'broccoli'];

for (var veggies = 0; 1 <= veggies.length; veggies++) {
    console.log(veggies);
}

let pet = {
    name: 'Tauser',
    breed: 'Domestic Short Hair',
}

console.log(pet);

let friends = [
{
    name: 'Shelby',
    age: 30
},

{
    name: 'claire',
    age: 30
},

{
    name: 'Darby',
    age: 18
},

{
    name: 'nirmal',
    age: 35
},

{
    name: 'David',
    age: 16
}

]

for (let i=0; i < friends.length; i++){
    checkAge(friends(i).name, friends(i).age);
}