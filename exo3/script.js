"use strict";

const students = [
  [1000, "JOHN", "DOE", 14, 5],
  [2000, "BOB", "CARLTON", 7, 1],
  [3000, "RAYANE", "SMITH", 13, 3]
];

function fA() {
  students.forEach(function (student) {
    const status = fB(student[3] + student[4]);
    console.log(student[0] + ": " + (status ? "ADMIS" : "AJOURNÉ"));
  });
}

function fB(average) {
  return average >= 10;
}
