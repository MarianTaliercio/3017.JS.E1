// Llego el momento de poner en practica los conceptos vistos hasta ahora con la primera entrega del módulo.

// Deberán realizar los siguientes ejercicios:

// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const parImpar = (numero) => {
  if(numero % 2 == 0){
console.log("El numero es par")
  }
  else{
    console.log("El numero es impar")
}
};

// parImpar(5);


// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const dosNumeros = (numero1, numero2) => {

    numero1 == numero2 
    ? console.log("ambos numeros son iguales") 
        : numero1 > numero2 
        ? console.log(`${numero1} es mayor que ${numero2}`)  
            : console.log(`${numero2} es mayor que ${numero1}`)
};

// dosNumeros(1005, 19);


// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const multiplo5 = (numero) => {
  if(Number.isInteger(numero / 5)){
    console.log(`${numero} es multiplo de 5`)
}
else console.log(`${numero} no es multiplo de 5`) 
} 

// multiplo5(9);


// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

const todosLosNumeros = (numero) => {
  for (let i = 0; i <= numero; i++) {
    console.log(i)
        
}}

// todosLosNumeros(10);

// 5-Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.



const repetirPalabra = (palabra, numero) => { 

  console.log(palabra.repeat(numero));

}

repetirPalabra("hola ", 5)


// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const Personas = ["a", "b", "c"]

const arrayValores = (array) => {
  for (let i = 0; i < array.length; i++) {
    // console.log(Personas[i])
  }
}

// arrayValores(Personas)


// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".


const valor10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arrayValor10 = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i == 4)
    continue;
    // console.log(valor10[i])
  }
}

// arrayValor10(valor10)


// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const numerosMultiplicados = [1, 2, 3, 4, 5]

const arrayMultiplicado = (array, numero) => {
    for (let i = 0; i < array.length; i++) {
      console.log(numerosMultiplicados[i]*numero)
    }
  }
  
  // arrayMultiplicado(numerosMultiplicados, 4)