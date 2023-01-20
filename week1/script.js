const firstName = "Phil";
const lastName = "Curran";
const fullName = firstName + " " + lastName;
const title = `${firstName}'s Week 2 Homework | IT121`;
const greeting = `Sup.  I'm ${fullName}.`;
const yearsHere = 0.5;
const ageStatement = `I've been at Seattle Central College for ${yearsHere} years.`;
const futurePlans =
  "I'm hoping to get a full-stack React developer job within the next few months.";

const titleField = document.getElementById("assignmentTitle");
titleField.innerHTML = title;
const greetingField = document.getElementById("greeting");
greetingField.innerHTML = greeting;
const ageStatementField = document.getElementById("howLong");
ageStatementField.innerHTML = ageStatement;
const futurePlansField = document.getElementById("futurePlans");
futurePlansField.innerHTML = futurePlans;
