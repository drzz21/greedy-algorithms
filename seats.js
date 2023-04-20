// https://www.interviewbit.com/problems/seats/
// There is a row of seats represented by string A. Assume that it contains N seats adjacent to each other. 
// There is a group of people who are already seated in that row randomly. i.e. some are sitting together & some are scattered.

// An occupied seat is marked with a character 'x' and an unoccupied seat is marked with a dot ('.')

// Now your target is to make the whole group sit together i.e. next to each other, without having any vacant seat between them in such a way that the total number of hops or jumps to move them should be minimum.

// In one jump a person can move to the adjacent seat (if available).

// NOTE:  1. Return your answer modulo 107 + 3.
//en resumen debemos calcular la cantidad de movimientos necesarios para que la gente se siente junta
//ejemplo si la entrada es ..x..x.
//podemos hacer 2 movimientos, para que la gente se siente junta, cada vez que alguien se mueva de asieno
//se sumará uno al costo, todas las personas se pueden mover de 1 asiento a la vez a izquierda o derecha siempre
//que esté libre
//entonces la salida o respuesta es 2

module.exports = {
	//param A : string
	//return an integer
	seats: function (A) {
		//calculamos el módulo como viene en las instrucciones que nuestra respuesta debe calcularse modularmente
		//con el valor 10^7+3 cuyo resultado de esa operacion es el modulo de aqui abajo
		const MOD = 10000003; // Valor del módulo para realizar aritmética modular

		// Crear un arreglo de índices de 'x' en la fila de asientos, esto nos retorna un arreglo
		//donde cada elemento del arreglo representa un indice de una x, es decir un indice de un lugar donde
		//hay alguien sentado, esto se logra partiendo la cadena de entrada y por cada X que encontremos, la convertimos en
		//un indice, si no es x la convertimos en -1, al final filtramos por los elementos que sean diferentes de -1
		//y eso nos retorna solo un arreglo con los indices de x
		const crosses = A.split('').map((c, i) => c === 'x' ? i : -1).filter(cross => cross !== -1);

		// Crear un arreglo con las diferencias entre las posiciones de 'x' y sus índices
		//esto nos da el numero de movimientos necesarios asumiendo que la posicion inicial es 0, nos da 
		//el numero de movimientos que deben hacer para estar todos juntos, considerando la posicion inicial como cero
		//esto se logra restando a cada elemento el indice donde están parados
		const crossesDiff = crosses.map((cross, i) => cross - i);

		const n = crossesDiff.length; // Obtener la longitud del arreglo de diferencias
		if (n === 0) return 0; // Si no hay 'x', retornar 0 porque no hay gente sentada o no se necesitan movimientos
		//es un edge case que se usa para validación unicamente

		//inicializamos la respuesta con el máximo posible valor
		let ans = Infinity; 
		const segment_start = crossesDiff[Math.floor(n / 2)]; // Obtener el valor de la mitad del arreglo de diferencias, 
		//la median como se llama inglés
		let total = 0; // Inicializar la variable para llevar el total de saltos

		// Calcular el total de saltos necesarios para mover a las personas a la posición de la mitad
		//tenemos en nuestro arreglo crossesDiff la cantidad de movimientos que cada elemento
		//debe hacer para estar a la izquierda del arreglo, estando todos agrupados uno al lado del otr
		//con este arreglo ya calculamos la cantidad de movimientos para tener agrupados los indices
		//ahora debemos calcular cuantos movimientos debe hacer para llegar al centro del arreglo
		//que calculamos como la mediana, ya que no deberian llegar hasta el inicio del arreglo, sino al putnno medio
		//vamos haciendo la sumatoria de a cada uno de ellos cuantos movimientos le tomaria llegar al centro
		for (const cross of crossesDiff) {
			total += Math.abs(cross - segment_start); // Calcular la diferencia absoluta entre la posición actual y la de la mitad
			total %= MOD; // Aplicar aritmética modular para mantener el resultado dentro del rango de 0 a MOD, segun las restricciones
			//del problema
		}


		ans = Math.min(ans, total); // Actualizar la variable de respuesta con el mínimo de la respuesta actual y el total de saltos
		//como se definio la respuesta como infinito siempre debería asignar el total y no asignar de nuevo ans
		return ans; // Retornar la respuesta
	}

};

console.log(seats("xx..x")); // Ejemplo de uso con la fila de asientos "xx..x"
