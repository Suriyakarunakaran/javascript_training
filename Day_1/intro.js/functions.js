5. Functions

console.log( a,c, d)
var a
var c = 20
function A() {
  console.log(b)
  var b = 20

  console.log('In A',a, b)
}
console.log( A)


console.log(a)

A()

console.log(undefined === b)
//Scoping and Hoisting

//Defining and Assignment
var e

//ES 6+
// Hoisting
var global = 100
//Block level scop4 : Let const
function B(){
  console.log(d)
  var  c= 20
  {
    let a = 20  
    var d = 30
  }
 
  console.log(global)
}
B()

console.log(c)