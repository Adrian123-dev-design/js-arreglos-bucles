// Función auxiliar para mostrar resultados
function mostrar(titulo, entrada, resultado) {
    return `${titulo}:\nEntrada: ${entrada}\nResultado: ${resultado}\n${'-'.repeat(40)}\n`;
}

// Función principal que ejecuta todos los retos
function ejecutarTodosLosRetos() {
    let salida = '';

    // Datos de prueba
    const arregloNumeros = [1, 2, 3, 4, 5];
    const arregloMezclado = [1, 2, 2, 3, 3, 4];
    const notas = [15, 18, 12, 14];
    
    // Probar cada reto
    salida += mostrar('Reto 1: Suma de Elementos', 
        `[${arregloNumeros}]`, 
        sumarElementos(arregloNumeros));

    salida += mostrar('Reto 2: Número Mayor', 
        `[${arregloNumeros}]`, 
        encontrarMayor(arregloNumeros));

    salida += mostrar('Reto 3: Filtrar Pares', 
        `[${arregloNumeros}]`, 
        `[${filtrarPares(arregloNumeros)}]`);

    salida += mostrar('Reto 4: Contar Vocales', 
        'JavaScript', 
        contarVocales('JavaScript'));

    salida += mostrar('Reto 5: Invertir Arreglo', 
        `[${arregloNumeros}]`, 
        `[${invertirArreglo(arregloNumeros)}]`);

    salida += mostrar('Reto 6: Promedio de Notas', 
        `[${notas}]`, 
        calcularPromedio(notas));

    salida += mostrar('Reto 7: Contador de Letras', 
        'Texto: JavaScript, Letra: a', 
        contarLetra('JavaScript', 'a'));

    salida += mostrar('Reto 8: Elementos Únicos', 
        `[${arregloMezclado}]`, 
        `[${obtenerUnicos(arregloMezclado)}]`);

    salida += mostrar('Reto 9: Palíndromo', 
        'radar', 
        esPalindromo('radar'));

    // Mostrar todos los resultados
    document.getElementById('consola').textContent = salida;
}
