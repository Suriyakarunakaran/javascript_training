2. Datatypes : Primitive, non primitive

https://javascriptwtf.com/

//Primitive
// 1. Number, Boolean, Char, String,

console.log(1 == "1")

//Type coercion
//Bugs

  //Non Primitive
//Arrays, Objects, Functions, Class
const A = [1, "1", "one"]

A.push(20)
console.log(A)
//call back functions

function print(value) {
  console.log(value);
            return value
}

//higher order functions



A.map(print)


function filterValue(value ) {
  console.log(value)
  return value == 1
}
const filteredArray = A.filter(filterValue)
console.log(filteredArray)

//slice HW

//splice HW