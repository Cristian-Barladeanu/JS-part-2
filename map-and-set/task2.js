// Task 2.
// We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
// But that doesn’t work:
// Error: keys.push is not a function
// keys.push("more");
// Why? How can we fix the code to make keys.push work?

const getKeys = (map) => { 

const arrayOfKeys = new Array();

for (const temp of map.keys()) { 
    arrayOfKeys.push(temp);
}

return arrayOfKeys;

//console.log(arrayOfKeys);

}



let map = new Map();

map.set("name", "John");


let keys = new Array();

keys = getKeys(map);

keys.push("more");

console.log(keys);
