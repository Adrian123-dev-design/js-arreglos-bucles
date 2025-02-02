// Reto 1: Suma de Elementos
function sumarElementos(arreglo) {
    return arreglo.reduce((total, num) => total + num, 0);
}

// Ejercicios para Reto 1
console.log(sumarElementos([1, 2, 3, 4])); // 10
console.log(sumarElementos([10, 20, 30])); // 60
console.log(sumarElementos([-1, 0, 1])); // 0

// Reto 2: Número Mayor
function encontrarMayor(arreglo) {
    return Math.max(...arreglo);
}

// Ejercicios para Reto 2
console.log(encontrarMayor([12, 5, 23, 18])); // 23
console.log(encontrarMayor([-10, -5, -20])); // -5
console.log(encontrarMayor([100, 200, 50])); // 200

// Reto 3: Filtrar Pares
function filtrarPares(arreglo) {
    return arreglo.filter(num => num % 2 === 0);
}

// Ejercicios para Reto 3
console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filtrarPares([10, 15, 20, 25])); // [10, 20]
console.log(filtrarPares([7, 9, 11])); // []

// Reto 4: Contar Vocales
function contarVocales(texto) {
    const vocales = texto.match(/[aeiouáéíóú]/gi); // Incluye vocales con acentos
    return vocales ? vocales.length : 0;
}

// Ejercicios para Reto 4
console.log(contarVocales("JavaScript")); // 3
console.log(contarVocales("Hola Mundo")); // 4
console.log(contarVocales("xyz")); // 0

// Reto 5: Invertir Arreglo
function invertirArreglo(arreglo) {
    const invertido = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        invertido.push(arreglo[i]);
    }
    return invertido;
}

// Ejercicios para Reto 5
console.log(invertirArreglo([1, 2, 3])); // [3, 2, 1]
console.log(invertirArreglo(["a", "b", "c"])); // ["c", "b", "a"]
console.log(invertirArreglo([10, 20, 30, 40])); // [40, 30, 20, 10]

// Reto 6: Promedio de Notas
function calcularPromedio(notas) {
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
}

// Ejercicios para Reto 6
console.log(calcularPromedio([15, 18, 12, 14])); // 14.75
console.log(calcularPromedio([10, 20, 30])); // 20
console.log(calcularPromedio([5, 5, 5, 5])); // 5

// Reto 7: Contador de Letras
function contarLetra(texto, letra) {
    return texto.split('').filter(char => char.toLowerCase() === letra.toLowerCase()).length;
}

// Ejercicios para Reto 7
console.log(contarLetra("JavaScript", "a")); // 2
console.log(contarLetra("Hola Mundo", "o")); // 2
console.log(contarLetra("Programación", "m")); // 1

// Reto 8: Elementos Únicos
function obtenerUnicos(arreglo) {
    return [...new Set(arreglo)];
}

// Ejercicios para Reto 8
console.log(obtenerUnicos([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
console.log(obtenerUnicos(["a", "b", "a", "c", "b"])); // ["a", "b", "c"]
console.log(obtenerUnicos([10, 10, 20, 30, 20])); // [10, 20, 30]

// Reto 9: Palíndromo
function esPalindromo(texto) {
    const textoNormalizado = texto.toLowerCase().replace(/[^a-záéíóú]/g, ''); // Elimina caracteres no alfabéticos
    const textoInvertido = textoNormalizado.split('').reverse().join('');
    return textoNormalizado === textoInvertido;
}

// Ejercicios para Reto 9
console.log(esPalindromo("radar")); // true
console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("Hola Mundo")); // false

// Ejercicio Adicional: Juego de Adivinar el Número
function adivinarNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;

    while (true) {
        const intento = parseInt(prompt("Adivina el número (entre 1 y 100):"));
        intentos++;

        if (intento === numeroAleatorio) {
            alert(`¡Correcto! Adivinaste en ${intentos} intentos.`);
            break;
        } else if (intento < numeroAleatorio) {
            alert("El número es mayor.");
        } else {
            alert("El número es menor.");
        }
    }
}

// Descomenta la siguiente línea para jugar
// adivinarNumero();
function adivinarNumero() {
    // Número fijo a adivinar (en este caso, 17)
    const numeroAleatorio = 17;
    let intentos = 0;

    // Función para pedir un número al usuario
    function pedirIntento() {
        const intento = parseInt(prompt("Adivina el número (entre 1 y 100):"));
        
        // Verificar si el valor ingresado es válido
        if (isNaN(intento) || intento < 1 || intento > 100) {
            alert("Por favor, ingresa un número válido entre 1 y 100.");
            pedirIntento(); // Volver a pedir un intento
        } else {
            verificarIntento(intento);
        }
    }

    // Función para verificar el intento del usuario
    function verificarIntento(intento) {
        intentos++; // Incrementar el contador de intentos

        if (intento === numeroAleatorio) {
            alert(`¡Correcto! Adivinaste el número en ${intentos} intentos.`);
        } else if (intento < numeroAleatorio) {
            alert("El número es mayor. Intenta de nuevo.");
            pedirIntento(); // Pedir otro intento
        } else {
            alert("El número es menor. Intenta de nuevo.");
            pedirIntento(); // Pedir otro intento
        }
    }

    // Iniciar el juego
    alert("¡Bienvenido al juego de Adivina el Número! Tienes que adivinar un número entre 1 y 100.");
    pedirIntento();
}

// Llamar a la función para iniciar el juego
adivinarNumero();
