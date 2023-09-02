let employees_details = [
    {
        employee_id: 1,
        employee_name: "Aman",
        employee_age: 22,
    },
    {
        employee_id: 2,
        employee_name: "Ramesh",
        employee_age: 26,
    },
    {
        employee_id: 3,
        employee_name: "Suresh",
        employee_age: 33,
    },
];

console.log();
console.log(employees_details);

console.log();
employees_details.forEach((element) => {
    console.log(element.employee_name + " : " + element.employee_age);
});
