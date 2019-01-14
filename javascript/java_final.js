var employee = {
  name: "John Smith",
  job : "Programmer",
  age:31
}

// function retrieve_keys() {
//     console.log("name is " + employee["name"] + "," );
//     console.log("job is " + employee["job"] );
//     console.log("age is " + employee["age"] );
// }
alert("name is " + employee["name"] + ", " + "job is " + employee["job"]
+ ", " + "age is " + employee["age"])

function nameLength() {
  console.log(employee["name"].length);

}
function lastName() {
  names = employee["name"].split(" ");
  console.log(names[1])

}
