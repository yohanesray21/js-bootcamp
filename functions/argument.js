// Multiple arguments
let add = function(a, b) {
    return a + b;
}

let result = add(10, 18);
console.log(result);

// Default arguments 
let getScore = function(name = 'Anonymous' , score = 100) {

    return "Nama : " + name + " - Score : " + score;
}

let scoreText = getScore(undefined, 90);
console.log(scoreText);

// Challange Area
// total, tipPercent .2

let allBill = function (total, tipPercent = .2) {

    return total * tipPercent;
}

let resultTip = allBill(120000, undefined);
console.log(resultTip);


// Challange Area
let bill = function(total, tipPercent = .25) {
    let result = total * tipPercent;
     return `Total bill yg akan dibayar adalah ${result}`

}

let tipp = bill (20000, undefined);
console.log(tipp);