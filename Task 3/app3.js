// the number we will be working on throughout 
var numbers = [2, 4, 9, 2, 7, 6,]

// declaration of the two array we will push to later
var squareArray = []
var filterArray = []

///////////////////////////////////////////////
// the function that squares each of the array numbers
function squareThem() {
    for (i = 0; i < numbers.length; i++) {
        var theSquared = numbers[i] * numbers[i]
        squareArray.push(theSquared)
    }
    console.log(squareArray)
}
squareThem()

///////////////////////////////////////////////

///////////////////////////////////////////////
// the function that filters the odd one out
function filterOdds() {
    for (i = 0; i < numbers.length; i++) {
        if ((numbers[i] % 2) != 0 ) {
            filterArray.push(numbers[i])
        }
    }
    console.log(filterArray)
}
filterOdds()

///////////////////////////////////////////////


///////////////////////////////////////////////
// the function that sums all numbers in the array
function sumAll() {
    var theSum = 0
    for (i = 0; i < numbers.length; i++) {
        theSum += numbers[i];
    }
    console.log(theSum)
}
sumAll()


///////////////////////////////////////////////
// the function that rearrange the numbers in ascending order
function rearrangeThem() {
    let arrangedNumbers = numbers.sort((a, b) => a - b);
    console.log(arrangedNumbers)
}
rearrangeThem()

///////////////////////////////////////////////