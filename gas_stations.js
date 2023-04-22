// https://www.interviewbit.com/problems/gas-station/
// Given two integer arrays A and B of size N. There are N gas stations along a circular route, where the amount of gas at station i is A[i].
// You have a car with an unlimited gas tank and it costs B[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.
// Return the minimum starting gas station's index if you can travel around the circuit once, otherwise return -1.
// You can only travel in one direction. i to i+1, i+2, ... n-1, 0, 1, 2.. Completing the circuit means starting at i and ending up at i again.
//explicacion, hay estaciones de gas, en una ruta circular, cada estacion tiene un costo de gas para llegar a ella
//y podemos cargar cierta cantidad de gas en cada una, el costo para llegar a cada una
// y la cantidad de gas que podemos cargar está definida en 2 arreglos de entrada, 1 contiene la cantidad de gas y otro
//el costo, nos podemos mover hacia la derecha en el arreglo hasta la siguiente estación y debemos encontrar la estación
//donde podamos iniciar y podamos recorrer todas las demas estaciones completando el circuito, en caso contrario si no encontramos
//nada regresamos -1
module.exports = {
	//param A : array of integers
	//param B : array of integers
	//return an integer
	canCompleteCircuit: function (A, B) {
		//obtenemos la longitud del arreglo
		//para iterar sobre el, 2 veces(puesto que se simulará que es
		//un circuito)
		const n = A.length;

		//definimos el valor curr que contendrá la cantidad
		//de gasolina con la que llegamos a una estación
		//y start contendrá la estación desde donde partimos
		let curr = 0;
		let start = 0;
		//iteramos de 0 a 2 veces la longitud del arreglo de entrada
		//esto para simular el circuito, y para simular el circuito
		//tendriamos que tener al menos 2 veces el arreglo original
		//para recorrer el elemento de partida 2 veces
		for (let i = 0; i < (n * 2); i++) {
			//asignamos g y c, g es la cantidad de gas de la estacion
			//y c es el costo
			//lo asignamos usando el modulo, de modo que el indice
			//que vamos a buscar siempre estará dentro del rango de 0 a n
			//donde n es la longitud del arreglo
			//el módulo en javascript nos permite recorrer un arreglo
			//de forma circular sin tener que preocuparnos de salirnos del rango
			const g = A[i % n];
			const c = B[i % n];
			//si el indice i es igual al inicio + la longitud del arreglo
			//quiere decir que ya recorrimos todas las posiciones del
			//arreglo entonces dimos la vuelta, entonces tenemos ya la
			//respuesta 
			if (i === start + n) {
				return start;
			}
			//caso contrario a nuestra gas actual le sumamos el combustible
			//que cargamos y le quitamos el costo generado de gas
			curr = curr + g - c;

			//si nuestra gasolina es negativa, actualizamos nuestro
			//inicio a la siguiente posicion de nuestro recorrido
			//actualizamos la posicion al siguiente elemnto del array
			//y esto es una optimizacion que nos permite saltarnos
			//todos los elementos donde igualmente nos quedariamos
			//sin gasolina antes de completar el recorrido
			//e iniciamos el tanque de 0 para que se repita lo de cargar
			//y gastar gasolina
			if (curr < 0) {
				start = i + 1;
				curr = 0;
			}
		}
		//si no encontramos la respuesta retornamos -1 como
		//dicen las condiciones del ejercicio
		return -1;
	}
};

