console.log( "Welcome to Employee Wage Computation Problem" )
let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;
let EMP_RATE_PER_HOUR = 20;

let empHrs = 0;
let empWage = 0;

let employee_Check = Math.floor( Math.random() * 10 ) % 3;
if( employee_Check == IS_PART_TIME )
	empHrs = 4;
else if( employee_Check == IS_FULL_TIME )
	empHrs = 8;
else
	empHrs = 0;
empWage = empHrs * EMP_RATE_PER_HOUR;
console.log("Employee wage is" + " " +empWage);
