let temp = 70

if (temp >= 60 && temp <= 90) {
    console.log('It is preety nice out');
} else if (temp <= 0 || temp >= 120) {
    console.log('go Outside!')
} else {
    console.log('Eh. what do you want!')
}

let isGuestOneVegan = true;
let isguestTwoVegan = false;

if (isGuestOneVegan && isguestTwoVegan) {
    console.log('vegan dishes');
}else if (isGuestOneVegan || isguestTwoVegan) {
    console.log ('offer up some vegan dishes');
}else {
    console.log('anything menu');
} 