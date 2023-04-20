// https://www.interviewbit.com/problems/assign-mice-to-holes/

// There are N Mice and N holes that are placed in a straight line. Each hole can accomodate only 1 mouse.
// The positions of Mice are denoted by array A and the position of holes are denoted by array B.
// A mouse can stay at his position, move one step right from x to x + 1, or move one step left from x to x − 1. Any of these moves consumes 1 minute.
// Assign mice to holes so that the time when the last mouse gets inside a hole is minimized.
//ejemplo
//primer arreglo es posicion de ratones 3,2,-4
//el segundo arreglo es la posicion de agujeros 0,-2,4
//vemos cuantos movimientos debe hacer cada uno para llegar al agujero
//y calculamos el que sea mayor para sacar el minimo, aqui el raton de -4 se mueve al agujero -2, le toma
//2 minutos, el raton en 2 se mueve al agujero en 0, le toma 2 minutos, y el raton en 3 se mueve al agujero 4,
//le toma 1 minuto, el máximo que se requiere es 2 por lo tanto es la respuesta a retornar
module.exports = {
	//param A : array of integers
	//param B : array of integers
	//return an integer
	mice: function (A, B) {
		//ordenamos los arreglos, de modo que los arreglos mas a la derecha
		//esten primero, lo mismo con los ratones, de modo que cada quien vaya a un agujero
		//que este en la misma posicion del arreglo en la que el ratón está
		A.sort((a, b) => a - b);
		B.sort((a, b) => a - b);

		let ans = 0;

		//combinamos para tener en un solo arreglo los elementos A y B
		let merged = A.map((el, i) => [el, B[i]]);

		//iteramos sobre nuestro arreglo combinado, que nos dará cada elemento de A y B
		//recordando que A son los ratones y B los agujeros
		for (let [a, b] of merged) {
			//la respuesta será el valor máximo que habrá entre la respuesta que ya tengamos
			//y el valor absoluto de restar la diferencia de distancia que hay entre 
			//el raton y el agujero correspondiente, como necesitamos como respuesta
			//el valor mayor en tiempo y a cada raton le toma 1 minuto moverse hacia
			//la izquierda o derecha, por eso calculamos como tal el valor absoluto
			//que ya tendría por lógica el valor de tiempo necesario
			ans = Math.max(ans, Math.abs(a - b))
		}
		return ans;
	}
};
