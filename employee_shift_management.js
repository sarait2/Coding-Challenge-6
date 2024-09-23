// Task 1: Create an Employees Array of Employee Objects
const employees = [

    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] },
];
console.log (employees);
//Initialize employees with shift schedules

//Task 2 : Create a Function to Display Employee Shift Details
function displayEmployeeShifts (employee) {
    console.log(`Employee Name: ${employee.name}`);
    employee.shifts.forEach(shift => {
        console.log(`Day: ${shift.day}, Hours: ${shift.hours}`);
    });
}
// Create displayEmployeeShifts function

//Task 3 - Create a Function to Assign a New Shift
function assignShift (name, day, hours) {
    // Name Search
        const employee = employees.find(emp => emp.name === employeeName);
    // Employee Message 
        if (!employee) {
            console.log('Employee not found.');
            return;
        }
     // See if Employee has a shift   
        const confirmedShift = employee.shifts.find(shift => shift.day === day);
        if (confirmedShift) {
            console.log(`Error: ${employeeName} is already assigned a shift on ${day}.`);
            return;
        }
}
//Create assignShift function

//Task 4 - Create a Function to Calculate Total Hours Worked
function calculateTotalHours(employeeName) {
    // Employee Name Search
    const employee = employees.find(emp => emp.name === employeeName);
    
    // Unidentifed Employee Message
    if (!employee) {
        const totalHours = employee.shifts.reduce((total, shift)=> total+shift.hours,0);
        console.log('${employeeName} Full hours worked: ${totalHours}');
        return totalHours; // Return full hours 
    } else { 
        console.log('${employeeName} not found');
        return 0; // 0 if employee is not found
    }
}
// Create calculateTotalHours function

// Example 
console.log(calculateTotalHours('David')); // Output: 8
console.log(calculateTotalHours('Alejandro')); // Output: Alejandro not found.

// Task 5 - Create a Function to List Employees with Free Days
function listAvailableEmployees (day, names) {
    console.log(`Employees availability on ${day}:`);
    
    // Filtering to find employees without shifts for the specified day
    const availableEmployees = employees.filter(employee => {
     // Verifying if employees have shifts for certain days
        return !employee.shifts.some(shift => shift.day === day);
    });

    // Available employee information
    if (availableEmployees.length > 0) {
        availableEmployees.forEach(employee => {
            console.log(employee.name);
        });
    } else {
        console.log('No employees are available.');
    }
}

// Example usage of the function
listAvailableEmployees('Monday'); // Should display Sara and Emily
//



    
    