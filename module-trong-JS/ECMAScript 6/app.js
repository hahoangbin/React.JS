// spread torng javascript

function logger([a, b, ...rest]) 
console.log(a);
console.log(b);
console.log(rest);

logger([2, 4, 5, 5, 44, 213, 5])


var array = ['Javascript', 'PHP', 'Ruby']
var array2 = ['Java', 'ReactJS']
var array3 = [...array2, ...array]

console.log(array3);


var obj1 = {
    name: 'bin'
}
var obj2 = {
    age: 19
}
var obj3 = {
    id: 123456
}

var profile = {
    ...obj1,
    ...obj2,
    ...obj3
}
console.log(profile);