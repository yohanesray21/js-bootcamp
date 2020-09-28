// Variable Shadowing

let name = 'Annes';

if (true) {

    let name = 'Ray'; // shawdowing parent scope 
    if(true) {
        console.log(name);
    }
}

if(true){
    console.log(name);
}