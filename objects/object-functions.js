let myBook = {
    title: '1984',
    author: 'George',
    pageCount: 236
}

let otherBook = {
    title: '2004',
    author: 'Adele',
    pageCount: 567
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSumnmary : `${book.title} is ${book.pageCount}`
    }
}


let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSumnmary);
console.log(otherBookSummary.summary);

//Challage Area
// Create Function - take fhranheit in - return object with all three

let convertFhranheit = function(fhranheit) {
    return {
        fhranheit: fhranheit,
        kelvin: (fhranheit + 495.67) * (5/9),
        celcius: (fhranheit - 32) * (5/9)
    }
}

let temps = convertFhranheit(74);
console.log(temps)




























