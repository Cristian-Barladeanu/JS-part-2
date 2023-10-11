// Task 1.
// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.

let values = ["Hare", "Krishna", "Hare", "Krishna",

    "Krishna", "Krishna", "Hare", "Hare", ":-O"];


const unique = (arr) => {


    const tempSet = new Set();


    for (const temp of arr) {
        tempSet.add(temp);
    };

    const uniqueArray = new Array();

    uniqueArray.push(...tempSet);

    console.log(uniqueArray);

    return uniqueArray;

}

unique(values); // Hare, Krishna, :-O


// P.S. Here strings are used, but can be values of any type.

// P.P.S. Use Set to store unique values.