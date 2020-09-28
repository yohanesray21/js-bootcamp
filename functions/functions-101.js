// Function - input(argument ), code, output

let greetUser = function () {
     console.log('Hello user!')
}

greetUser();
greetUser();
greetUser();

let square = function (num) {
    let result = num * num;
    return result;
}

let value = square(3)
let otherValue = square(10)

console.log(value);
console.log(otherValue);

let conversion = function(fhranheit) {
    let result = (fhranheit - 32) * (5/9) + ' Celcius';
    return (result);
}

let Celcius1 = conversion(32);
let Celcius2 = conversion(68);

console.log (Celcius1);
console.log (Celcius2);