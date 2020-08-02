console.log( "Welcome to Employee Wage Computation Problem" )
let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;
let EMP_RATE_PER_HOUR = 20;
let NUMBER_OF_WORKING_DAYS = 20;

let empHrs = 0;
let empWage = 0;
let totalWage = 0;

for (let day = 0; day < NUMBER_OF_WORKING_DAYS; day++) {
let employee_Check = Math.floor( Math.random() * 10 ) % 3;

switch(employee_Check) {

	case IS_PART_TIME:
		empHrs = 4;
		break;

	case IS_FULL_TIME:
		empHrs = 8;
		break;

	default:
		empHrs = 0;
	}

	empWage = empHrs * EMP_RATE_PER_HOUR;
	totalWage += empWage;
}
console.log("Employee wage is" + " " +totalWage);
