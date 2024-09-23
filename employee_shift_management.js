// Task 1: Create an Employees Array of Employee Objects
const employees = [

    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] },
];
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
        const employee = employees.find(employee => employee.name === employeeName);
        if (!employee) {
            console.log('Employee not found.');
            return;
        }
        
        const existingShift = employee.shifts.find(shift => shift.day === day);
        if (existingShift) {
            console.log(`Error: ${employeeName} is already assigned a shift on ${day}.`);
            return;
        }
        
        employee.shifts.push({ day, hours });
}
//Create assignShift function




    
    