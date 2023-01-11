const operator = prompt('Enter operator ( either +, -, * or / ): ');
let number1 = parseFloat(prompt('Enter first number: '));
let number2 = parseFloat(prompt('Enter second number: '));
let result;

switch(operator) {
    case '+':
        result = number1 + number2;
        alert(`${number1} + ${number2} = ${result}`);        
        break;
    case '-':
        result = number1 - number2;
        alert(`${number1} - ${number2} = ${result}`);        
        break;
    case '*':
        result = number1 * number2;
        alert(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        alert(`${number1} / ${number2} = ${result}`);        
        break;

    default:
        alert('Invalid operator');
        break;
}

number1 = parseInt(prompt('Entre su edad'));

result= number1>16? "Puedes conducir" : "No puedes conducir"; 

alert(result);




