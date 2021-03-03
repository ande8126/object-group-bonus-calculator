const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
function bonusCalc ( employee ) {
  let bonus = 0;
  let newArray = [{ name : "",
                bonusPercent: 0,
                totalCompensation : 0,
                totalBonus : 0
  }];
  if (employee.reviewRating === 2) {
    bonus = 0;
  } else if (employee.reviewRating === 3){
    bonus = 4;
  } else if (employee.reviewRating === 4){
    bonus = 5;
  } else if (employee.reviewRating === 5){
    bonus = 10;
  }//end ratings

  if(employee.employeeNumber.length === 4){
    bonus += 5;
  }//end employee digits

  if(employee.annualSalary > 65000){
    bonus -= 1;
  }//end salary check

  if (bonus > 13){
    bonus = 13;
  }//end 13 cap

  if(bonus < 0){
    bonus = 0;
  }

  newArray.bonusPercent = bonus;
  newArray.totalCompensation = Number(employee.annualSalary) + Math.round(employee.annualSalary * bonus / 100)
  newArray.totalBonus = Math.round(employee.annualSalary * bonus / 100);
  newArray.name = employee.name;

  return newArray;

}//end bonusCalc

function giveBonuses(employees){
  let payDay = [];
  for ( i=0; i<employees.length; i++ ){
    payDay.push(bonusCalc(employees[ i ]));
  }//end for
  return payDay;
}//end giveBonuses

$( document ).ready( readyNow );

function readyNow(){ 

  $ ('#applyBonus').on('click', showBonus) 

} 

function showBonus (){
  let bonuses = giveBonuses(employees)
  $("#bonusTable").append("<tr class=\"header\"><th>Name</th><th width=8%>Employee Number</th><th width=8%>Review Rating</th><th>Base Salary</th><th width=8%>Bonus %</th><th>Bonus $</th><th>Total Compensation</th></tr>")
  for(let i = 0; i < bonuses.length; i++){
  $("#bonusTable").append("<tr><td>" + bonuses[i].name + "</td><td>"+ employees[i].employeeNumber + "</td><td>" + employees[i].reviewRating + "</td><td>$"+ employees[i].annualSalary + "</td><td>" + bonuses[i].bonusPercent + "%</td><td>$" + bonuses[i].totalBonus + "</td><td>$" + bonuses[i].totalCompensation + "</td></tr>")
  }//end append
}//end showBonus
console.log(giveBonuses(employees));

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
