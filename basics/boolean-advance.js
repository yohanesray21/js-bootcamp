let isAccountLocked = true;
let userRole = 'admin';

if(isAccountLocked) {
    console.log('Is account locked');
} else {
    console.log('welcome');
}

if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin') {
    console.log('welcome admin')
}else {
    console.log('welcome')
}

let temp = 100

if (temp <=32 ) {
    console.log('It is freezing outside');
} else if (temp >= 110) {
    console.log('It is hot outside!');
} else {
    console.log('Go for it. It is preety nice');
}