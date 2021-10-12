/*
a program that registers runners for the
race and give them instructions on race day.
*/
//Allocate race number for each runner
let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly=true;

const runnerAge=16;

//Early adults receive a race number at or above 1000.
if (runnerAge> 18 && registeredEarly){
  raceNumber+=1e3
}

if (runnerAge > 18){
  if (registeredEarly){
  //Early adults run at 9:30 am
  console.log(`You will race at 9:30am with race number: ${raceNumber}`)
  } else {
  //"Late adults run at 11:00 am"
console.log(`You will race at 11:00am with race number: ${raceNumber}`)
}
} else if (runnerAge < 18){
 // "Youth registrants run at 12:30 pm"
console.log(`You will race at 12:30pm with race number: ${raceNumber}`)
} else {
  //youth exactly 18 years
  console.log("You should see the registration desk")
}
