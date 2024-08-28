#! /usr/bin/env node
// SHABANG
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: " Enter first number ", type: "number", name: "firstNumber" },
  { message: " Enter second number ", type: "number", name: "secondNumber" },
  {
    message: "select one of the  operators to perform operation  ",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division","Exponential","Module",],
  },
]);
console.log(answer);

if (answer.operators === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operators === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if(answer.operators === "Multiplication") {
    console.log(answer.firstNumber*answer.secondNumber);
    
}
 else if (answer.operators === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
}
else if(answer.operators === "Exponential"){
  
  
  console.log(answer.firstNumber**answer.secondNumber);
}
else if( answer.operators === "Module"){
  console.log(answer.firstNumber%answer.secondNumber);
  
}
else {
  console.log(" please enter a valid operators ");
}
