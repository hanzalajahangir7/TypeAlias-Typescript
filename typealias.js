"use strict";
// // defining type
Object.defineProperty(exports, "__esModule", { value: true });
let Employee1 = {
    name: "ahmed",
    salary: 50000,
    busticket: 15000
};
let Employee2 = {
    name: "asad",
    salary: 50000,
    busticket: 10000
};
let Employee3 = {
    name: "furqan",
    salary: 60000,
    busticket: 30000
};
// salry - busticket = remaining salary
function RemainingSalary(rsalary) {
    return `the remaining salary of ${rsalary.name} is ${rsalary.salary - rsalary.busticket}`;
}
console.log(RemainingSalary(Employee1));
console.log(RemainingSalary(Employee2));
console.log(RemainingSalary(Employee3));
