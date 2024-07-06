
//Write a program that creates Objects containing these items.

// data type of person object 
interface person {
    age : number,
    name : string,
    nationality : string,
    student : Boolean ,
}
// person object
let person = {
    age : 26 ,
    name : 'Faizan' ,
    nationality : 'Pakistan' ,
    student : true
}
//print person
console.log(person);

// data type of person object
interface car  {
    maker : string,
    color : string,
    automatic : boolean
}

// car object
let car = {
    maker : 'toyota',
    color : 'black',
    automatic : true
}

//print car
console.log(car);