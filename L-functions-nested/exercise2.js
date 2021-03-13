//Exercise 2
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function spellUpperCase(mentor1, mentor2, mentor3, mentor4, mentor5) {
  let name1 = mentor1.toUpperCase();
  let name2 = mentor2.toUpperCase();
  let name3 = mentor3.toUpperCase();
  let name4 = mentor4.toUpperCase();
  let name5 = mentor5.toUpperCase();

  return [name1, name2, name3, name4, name5];
  
}


function createGreeting(msg1, msg2, msg3, msg4, msg5){
  let result = spellUpperCase(msg1, msg2, msg3, msg4, msg5);
  console.log(`HELLO ${result[0]}`);
  console.log(`HELLO ${result[1]}`);
  console.log(`HELLO ${result[2]}`);
  console.log(`HELLO ${result[3]}`);
  console.log(`HELLO ${result[4]}`);
 
} 

createGreeting(mentor1, mentor2, mentor3, mentor4, mentor5);

