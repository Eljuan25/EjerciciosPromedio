
function generarTabla() {
    var numberInput = document.getElementById('numberInput').value;
    var tablaResultado = document.getElementById('tablaResultado');

    tablaResultado.innerHTML = '';


    if (isNaN(numberInput)) {
        tablaResultado.innerHTML = 'Por favor, ingresa un numero valido.';
        return;
    }

    // Generar la tabla de multiplicar
    var tablaHTML = '<h2>Tabla de Multiplicar del ' + numberInput + '</h2>';
    tablaHTML += '<table>';
    for (var i = 1; i <= 10; i++) {
        tablaHTML += '<tr><td>' + numberInput + ' x ' + i + '</td><td>=</td><td>' + (numberInput * i) + '</td></tr>';
    }
    tablaHTML += '</table>';

    // Mostrar la tabla de multiplicar
    tablaResultado.innerHTML = tablaHTML;
}

function contarVocales() {
    var inputString = prompt("Ingresa una cadena de caracteres:");
    var vowels = inputString.match(/[aeiou]/gi);
    var count = vowels ? vowels.length : 0;
    alert("La cantidad de vocales en la cadena es: " + count);
}

function calcularFactorial() {
    var num = parseInt(prompt("Ingresa un numero entero:"));
    var factorial = 1;
    for (var i = 2; i <= num; i++) {
        factorial *= i;
    }
    alert("El factorial de " + num + " es: " + factorial);
}

function generarPrimos() {
    var num = parseInt(prompt("Ingresa un numero entero:"));
    var primes = [];
    for (var i = 2; i <= num; i++) {
        var isPrime = true;
        for (var j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    alert("Los numeros primos menores o iguales a " + num + " son: " + primes.join(', '));
}

function calcularFibonacci() {
    var num = parseInt(prompt("Ingresa un numero entero para calcular la serie Fibonacci:"));
    var fibonacciSeries = [0, 1];
    for (var i = 2; i < num; i++) {
        fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
    }
    alert("Los primeros " + num + " terminos de la serie Fibonacci son: " + fibonacciSeries.join(', '));
}

function sumarDigitos() {
    var num = prompt("Ingresa un numero entero:");
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        sum += parseInt(num[i]);
    }
    alert("La suma de los digitos del numero es: " + sum);
}

function calcularMCD() {
    var num1 = parseInt(prompt("Ingresa el primer numero entero:"));
    var num2 = parseInt(prompt("Ingresa el segundo nmuero entero:"));
    while (num2 !== 0) {
        var temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    alert("El maximo comun divisor (MCD) de los numeros es: " + num1);
}

function ordenarNumeros() {
    var numbers = prompt("Ingresa una lista de numeros separados por comas:");
    var sortedNumbers = numbers.split(',').map(Number).sort(function(a, b){return a - b});
    alert("Los números ordenados de forma ascendente son: " + sortedNumbers.join(', '));
}

function decimalABinario() {
    var decimalNumber = parseInt(prompt("Ingresa un numero decimal:"));
    var binaryNumber = decimalNumber.toString(2);
    alert("El equivalente binario de " + decimalNumber + " es: " + binaryNumber);
}