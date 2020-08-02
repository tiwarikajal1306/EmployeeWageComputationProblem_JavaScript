console.log( "Welcome to Employee Wage Computation Problem" )
let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;
let EMP_RATE_PER_HOUR = 20;
let NUMBER_OF_WORKING_DAYS = 20;
let MAX_HRS_IN_MONTH = 100;

let empWage = 0;
let totalEmpHrs = 0;
let totalWage = 0;
let totalWorkingDays = 0;

function getWorkingHours (employee_Check) {
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
	return empHrs;
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays <= NUMBER_OF_WORKING_DAYS) {
	totalWorkingDays++;
       	let employee_Check = Math.floor( Math.random() * 10 ) % 3;
	empHrs = getWorkingHours(employee_Check);
	totalEmpHrs += empHrs;
}
totalEmpWage = totalEmpHrs * EMP_RATE_PER_HOUR;
console.log("Employee wage is" + " " +totalEmpWage);
