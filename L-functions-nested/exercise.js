// Exemple
/*
function getAgeInDays(age){
    return age *365;
}

function createCreeting(name, age){
    let ageInDays = getAgeInDays(age);
    let message = "My name is " + name + " and I was born over " + ageInDays + " days ago !";
    return message;
}


let result = createCreeting("Manpreet", 30);
console.log(result); */

//Exercise 1
function calculatePercentage(students, mentors){
    let totalNumber= students + mentors;
    let percentageStudents = (students / totalNumber) * 100;
    let percentageMentors = (mentors / totalNumber) * 100
    return percentageStudents, percentageMentors;
}

function createMessage(students, mentors){
    let ps = calculatePercentage(students);
    let pm  = calculatePercentage(mentors);
    let msg = "Percentage students: " + ps.toFixed(2)+  " " + "and" + " " + "Percentage students: " + pm.toFixed(2);
    return msg;
}

let resultat = createMessage(15, 8);
console.log(resultat);




//Exercise 2
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function spellUpperCase(mentor1, mentor2, mentor3, mentor4, mentor5){
    return;
}