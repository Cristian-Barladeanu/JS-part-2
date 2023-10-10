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