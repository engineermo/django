function hello() {
  console.log("Hello");}

function helloyou(name) {
  console.log("Hello " + name);}


function addNum(num1, num2) {
  console.log(num1+num2);}

  function formal(name , title) {
    return title + " " +name  }

function timesFive(num) {
  var result = num * 5
return result
}

// Global Scope

var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff) {
  console.log(v);
  stuff = "Reassign inside func"
  console.log(stuff);

}
fun();
console.log(stuff);
