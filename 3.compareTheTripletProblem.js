function compareTriplets(a, b) {
    let outputArray = [0, 0];
    const numberOfQuestions = 3;
    
    for (let i = 0; i < numberOfQuestions; i++) {
        if(a[i] > b[i]) {
            outputArray[0] += 1;
        }else if(a[i] < b[i]) {
            outputArray[1] += 1;
        }else {
            continue
        }
    };
    
    return outputArray;

};

// console.log(compareTriplets([10, 11, 48], [20, 11, 47]));