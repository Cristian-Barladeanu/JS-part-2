// Task 1. Write a function count(obj) that returns the number of properties in the object:

// console.log( count(user) );

let user = {

    name: 'John',

    age: 30
};

const count = (obj) => {

    const keys = Object.keys(obj);

    return keys.length;
}

console.log(count(user));


// Task 2.
// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.

let salaries = {

    "John": 100,

    "Pete": 300,

    "Mary": 250

};

const sumSalaries = (obj) => {

    const salaries = Object.values(obj);

    let temp = 0;

    for (const a of salaries) { 
        temp += a;
    }

    return temp;

    // for (const temp of salaries) { 

    //     let ;
    // }

}

console.log(sumSalaries(salaries)); // 650



