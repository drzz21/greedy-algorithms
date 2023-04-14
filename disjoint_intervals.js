// Given a set of N intervals denoted by 2D array A of size N x 2, the task is to find the length of maximal set of mutually disjoint intervals.

// Two intervals [x, y] & [p, q] are said to be disjoint if they do not have any point in common.

// Return a integer denoting the length of maximal set of mutually disjoint intervals.

module.exports = {
	//param A : array of array of integers
	//return an integer
	solve: function (A) {
		A.sort((a, b) => a[1] - b[1]);

		// Inicializamos las variables con el primer intervalo.
		let [start, end] = A[0];
		//se inicializa en 1 porque siempre podremos 
		// elegir al menos un intervalo
		let count = 1;
		//iteramos en A y destructuramos el inicio y el final
		for (let [new_start, new_end] of A) {
			//si el inicio actual es menor o igual que el extremo
			//derecho del ultimo intervalo entonces hay una superposicion
			//y no se deberia hacer nada poque no se puede incrementar el conteo
			//porque estan overlapped
			if (new_start <= end) {
				continue;
			} else {
				//si no se superponen entonces si podemos aumentar el conteo
				//y actualizar los valores de inicio y final de 
				//las variables de intervalo que usamos para la comparación
				[start, end] = [new_start, new_end];
				count++;

			}
		}

		return count;
	}
};
