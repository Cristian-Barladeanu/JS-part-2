// Task 1.
// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.
// P.S. Here strings are used, but can be values of any type.
// P.P.S. Use Set to store unique values.

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",

  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

const returnUnique = (arr) => {
  
  const uniqueArray = new Array();

  for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr[i] === uniqueArray[j]) {
        found = true;

        break;
      }
    }

    if (!found) {
      uniqueArray.push(arr[i]);
    }
  }

  console.log(uniqueArray);

  return uniqueArray;
};

returnUnique(values);

//########################################

// const tempSet = new Set();

// // for (const temp of arr) {
// //     tempSet.add(temp);
// // };

// // const uniqueArray = new Array();

// // uniqueArray.push(...tempSet);

// // console.log(uniqueArray);

// // return uniqueArray;
//unique(values); // Hare, Krishna, :-O
