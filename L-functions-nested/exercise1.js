function calculatePercentage(num1, num2) {
  sum = num1 + num2;
  let studentPercentage = Math.round((num1 / sum) * 100);
  let mentorPercentage = Math.round((num2 / sum) * 100);
  //  createMeassage(studentPercentage, mentorPercentage);
 // let mentorPercentage = Math.round((num2 / sum) * 100);
  return [studentPercentage, mentorPercentage];
}

function createMeassage(students, mentors) {
  //let studentsMsg = "Percentage Students: " + students;
  //let mentorsMsg = "Percentage Mentors : " + mentors;
  //console.log(studentsMsg + "\n" + mentorsMsg);
  let msg = calculatePercentage(students, mentors);
  //let msg2 = calculatePercentage(mentors);
  console.log(`Percentage Students %: ${msg[0]} \nPercentage Mentrors %:  ${msg[1]}`);

  //return msg;
}

//calculatePercentage(15, 8);
createMeassage(15, 8);
