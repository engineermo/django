
var roster = []

answer = prompt("Would you like to use the web app, please type y or n")

if (answer === 'y') {
  while (true) {
    action = prompt("Waht would you like to do: add, remove, display or quit")
    if (action === 'add') {

      add()
    }
    if (action === 'display') {
      display()
    }

    if (action === 'remove') {

      remove()
    }
    if (action === 'quit') {
      break
    }
    else {
      console.log("it seems that you entered an unexpected answer, have a good day");
    }
  }

}

else if (answer === 'n') {

  alert("Thank you")
}
else {
  alert("the input you provided was not expected please refresh and try again!!")
}

function add(name) {
  name = prompt("please provide the name you want to add")
  roster.push(name)
}

function remove(name){
  name = prompt("please type in the name you want to remove")
  var index = roster.indexOf(name)
  if (index >-1) {
    roster.splice(index,1)

  }}
  function display() {
    alert(roster);

  }
