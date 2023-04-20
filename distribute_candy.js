// https://www.interviewbit.com/problems/distribute-candy/

// Problem Description

// N children are standing in a line. Each child is assigned a rating value.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// What is the minimum number of candies you must give?

// Problem Constraints
// 1 <= N <= 105

// -109 <= A[i] <= 109

// Input Format
// The first and only argument is an integer array A representing the rating of children.

// Output Format
// Return an integer representing the minimum candies to be given.

// Example Input
// Input 1:

//  A = [1, 2]
// Input 2:

//  A = [1, 5, 2, 1]


// Example Output
// Output 1:

//  3
// Output 2:

//  7

//explicacion
//los niños obtienen al menos 1 candy cada uno, los niños con mayor rating obtienen mas que sus vecinos
//debemos encontrar la cantidad minima de candies que necesitamos tener para dar a todos los niños
//dada la entrada 1,3,7,1
//vemos que debemos repartirlos en el orden 1,2,3,1
//al primero le damos 1 que es lo minimo, al segundo 2, para que tenga mas que sus vecinos, 
//al tercero le damos 3 que es mas que sus vecinos, y al ultimo le damos 1 de nuevo, ya que es mas chico de nuevo
//sumando obtenemos que debemos dar 7 porque 1+2+3+1=7
//al segundo le podriamos dar la cantidad que fuera, pero dado que debemos optimizar la menor cantidad de candys a usar
//solo le aumentamos 1 con respecto al primer niño
module.exports = {
	//param A : array of integers
	//return an integer
	candy: function (A) {
		//extraemos la longitud de nuestro array inicial, esto nos servirá más adelante
		let n = A.length;
		//generamos un arreglo donde tengamos los valores de rating de los niños
		//y su indice dentro del arreglo, y lo ordenamos por el rating, de modo
		//que los niños con menor rating estén al principio del array
		let data = A.map((x, i) => [x, i]).sort((a, b) => a[0] - b[0]);

		//creamos un arreglo lleno con 1, que es el valor por defecto
		//que tendrá cada niño puesto que le debemos asignar mínimo 1 candy a cada uno
		//por lo tanto 1 será nuestro caso por defecto
		let candies = new Array(n).fill(1);

		//iteramos, ya no nos interesa el rating, solo el indice, porque
		//ya estan ordenados en base a su rating de menor a mayor
		for (let [_, i] of data) {
			//como ya estamos iterando usando los niños con rating mas bajo, ahora no usaremos data
			//ya que esto nos servia para ordenar por rating, ahora usaremos nuestro arreglo original, y nuestro arreglo de candies


			//primero revisamos que i sea mayor a cero para asegurarnos que tenga elementos a la izquierda
			//y verificamos que del arreglo original el indice que estamos revisando tenga mayor rating del elemento
			//de la izquierda, al cumplirse esto entonces en nuestra posicion actual
			//debemos sacar el maximo entre el valor del elemento actual que es 1 si no se ha llenado
			//y el valor del elemento de la izquierda, esto nos asegura que el elemento actual
			//tenga un numero mayor de candies que su elemento a la izquierda
			//esto porque segun la comparación del if el elemento actual tiene mayor rating que el elemento a la izquierda

			if (i > 0 && A[i] > A[i - 1]) {
				candies[i] = Math.max(candies[i], candies[i - 1] + 1);
			}
			//tambien validamos lo mismo pero con el elemento a la derecha, para asegurarnos que si el elemento
			//tiene mayor rating que el elemento a su derecha, tengamos mas candies que el
			if (i < n - 1 && A[i] > A[i + 1]) {
				candies[i] = Math.max(candies[i], candies[i + 1] + 1);
			}
		}
		//hacemos la suma del arreglo de candies, donde tenemos cuantos asignamos a cada uno
		//debemos hacer la sumatoria para ver el total que necesitaremos
		return candies.reduce((a, b) => a + b);
	}
};
