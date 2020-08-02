console.log( "Welcome to Employee Wage Computation Problem" )
let EMP_RATE_PER_HOUR = 20;
let empHrs = 0;
let empWage = 0;
let is_Present = 1;
let employee_Check = Math.floor( Math.random() * 10 ) % 2;
if( employee_Check == 1 )
	empHrs = 8;
else
	empHrs = 0;
empWage = empHrs * EMP_RATE_PER_HOUR;
console.log(empWage);
