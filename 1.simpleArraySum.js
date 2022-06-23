function simpleArraySum(ar) {
    // initialize a value to keep track of the total
    let total = 0;

    // iterate through the array and increment the total with each iteration
    ar.forEach(element => {
        total += element;
    })
    return total;

};

let test1 = [1, 2, 3, 4, 5] // sum 15
let test2 = [1.5, 4.4, 1.6, 5.5] // sum 13

// console.log(simpleArraySum(test1));
// console.log(simpleArraySum(test2));