// function sleepIn(weekday, vacation) {
//   var wkdays = ["Monday","Tuesday","Wednesday","Thursday", "Friday"]
//   var vctn = ["Saturday", "Sunday"]
//   var wkd = []
//   for(var i =0; i<wkdays.length; i++){
//       wkd.push(wkdays[i].toUpperCase())}
//       weekday = weekday .toUpperCase()
//
// if (wkd.includes(weekday)) {
//   console.log("its not a vacation or sleep day");
//   return false
// }
// else{ return true
// }
// }

function sleepIn(weekday,vacation){
  return(!weekday || vacation)
}


function stringTimes(str,n){
  for (var i =0; i<n; i++){
    console.log(str);
  }
}

function caught_speed(speed, birthday) {
  if(speed <= 60){
    return 0;}
    else if (speed>61 && speed<80) {
      return 1;}
      else if (speed >81) {
        return 2}
        if (birthday === true) {
          speed-=5
        }}
