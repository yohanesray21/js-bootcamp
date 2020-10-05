// student score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, E 0-59

let getScore = function (score, totalScore) {
    let grade = (score/totalScore) * 100;
    
    if (grade >= 90) {
        // console.log('You Got a A '+grade +'%');
        // return `You Got a A (${grade}%)`
        letterGrade = 'A';
    } else if (grade >= 80) {
        // return `You Got a B (${grade}%)`
        // console.log('You Got a B '+grade +'%');
        letterGrade = 'B';
    } else if (grade >= 70) {
        // return `You Got a C (${grade}%)`
        // console.log('You Got a C '+grade +'%');
        letterGrade = 'C';
    } else if (grade >= 60) {
        // return `You Got a D (${grade}%)`
        // console.log('You Got a D '+grade +'%');
        letteGrade = 'D';
    } else {
        // return `You Got a A (${grade}%)`
        // console.log('You Got a E '+grade +'%');
        letterGrade ='E';
    }

    return `You Got a ${letterGrade} (${grade}%)`;
}

let result = getScore(9,20);
console.log(result);