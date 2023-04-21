// https://www.interviewbit.com/problems/majority-element/

// Given an array of size N, find the majority element. The majority element is the element that appears more than floor(N/2) times.
// You may assume that the array is non-empty and the majority element always exist in the array.
//debemos encontrar dado un arreglo el elemento que aparezca la mayor cantidad de beses dadas las restricciones dadas
//ejemplo si tenemos de entrada 3,2,2,4,2,2
//la salida será 2, porque debemos encontrar el elemento que tenga la frecuencia mayor a  floor(n/2) en este caso n=6
//entonces debemos encontrar el elemento que este mas de 6/2 veces, osea mas de 3 veces y el 2 está 4 veces, lo que cumple
//con nuestra restrición por lo tanto la respuesta es 2
module.exports = {
	//param A : array of integers
	//return an integer
	majorityElement: function (A) {
		// Obtener la longitud del arreglo A
		let n = A.length;
		// Inicializar la variable de respuesta ans como BigInt con valor 0
		let ans = BigInt(0);

		// Iterar sobre los bits de 0 a 31 (32 bits en total)
		for (let b = 0; b < 32; b++) {
			let ones = 0; // Contador de unos en el bit actual

			// Iterar sobre los números en el arreglo A
			for (num of A) {
				// Verificar si el bit actual (representado por 1 << b) está activado en el número actual (A[i])
				// 1<<b nos toma el 1, y lo desplaza b veces, osea si tenemos 1 y lo movemos en binario 0 veces
				//nos dará un 1, si lo movemos 1 vez nos dará un 2, si lo movemos 3 nos dará 4
				//y así sucesivamente
				//usamos bigint para manejar numeros muy grandes que puedan causar problemas
				//a javascript
				//entonces vamos a desplazar b, hasta obtener 2^32 que es el valor que puede tener
				//un entero
				//aqui se usa un and lógico, debemos tener el mismo número en ambos para que incremente el valor de ones
				//con el and logico 8&8=8 , 8&16=0
				//entonces cuando encontremos dentro de nuestro arreglo original, algun numero que coincida con el valor
				//binario que tenemos, incrementamos el conteo de unos, y cuando el total de unos
				//sea mayor a la mitad de la longitud del arreglo, asignamos la respuesta,
				//cuando el ciclo se termine, se retorna la respuesta, el ciclo se termina hasta que llegamos a iterar
				//32 veces el ciclo, ya que 32 en binario es el maximo numero en entero que podemos tener en javascript
				//dicho de este modo nuestra iteración para el caso mostrado se veria algo así
				//en la iteración cero o inicial solo encontramos una coincidencia con un 1, en el segundo elemento
				//y en la segunda encontramos 2 coincidencias con número 2, en la primer y ultima posicon
				//este ciclo se repite 32 veces y como el 2 es que se encuentra mas de la mitad de la longitud del elemento
				//es la respuesta
				// 0 0
				// 1 0
				// 0 0
				// 2 1
				// 0 1
				// 2 1
				if (BigInt(1 << b) & BigInt(num)) {
					ones++; // Incrementar el contador de unos si el bit está activado
				}

				// Verificar si se ha encontrado una mayoría en unos (más de la mitad de los números)
				if (ones > n / 2) {
					// Activar el bit correspondiente en el resultado (ans) usando el operador OR a nivel de bits (|)
					// ans |= BigInt(1 << b);
					//es lo mismo que esto
					//esta operacion enciende los bits correspondientes cuando
					//los unos son mayores a la mitad de la longitud del arreglo, es decir cuando ya tenemos
					//un arreglo que tiene el numero que aparece mas veces en el arreglo
					// se hace la operacion de encender los unos así:
					//10or20=30, si en una fila tenemos un uno, este uno enciende toda la fila
					// 1010 = 10
					//10100 = 20
					//___________
					//11110 = 30
					//esta operación al final nos dará el número que es el que esta mas veces en el array
					ans = ans | BigInt(1 << b);
				}
			}
		}

		// Convertir el resultado (ans) de BigInt a un número entero regular y retornarlo, esto para 
		//eliminar la n que sale hasta el final
		return parseInt(ans.toString(), 10);
	}
};
