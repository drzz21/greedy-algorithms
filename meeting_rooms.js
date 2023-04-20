// https://www.interviewbit.com/problems/meeting-rooms/
// Given an 2D integer array A of size N x 2 denoting time intervals of different meetings.

// Where:
// A[i][0] = start time of the ith meeting.
// A[i][1] = end time of the ith meeting.


// Find the minimum number of conference rooms required so that all meetings can be done.

// Note :- If a meeting ends at time t, another meeting starting at time t can use the same conference room
//ejemplo
//entrada 5,10 15,20 0,30
//0,30 y 5,10 tienen lugar simultaneamente
//igual 0,30 y 15,20 entonces ocupariamos 2 cuartos que seria la menor cantidad de cuartos
//que necesitariamos para satisfacer las juntas usando la menor cantidad de cuartos
//salida 2

module.exports = {
	//param A : array of array of integers
	//return an integer
	solve: function (A) {
		let data = [];
		//extraemos cada inicio y final de los intervalos que obtenemos del arreglo de entrada
		//los asignamos a nuestro arreglo de datos, para los inicios aumentamos en uno 
		//y para los finales disminuimos en 1, sera simbolico porque guardaremos en un arreglo
		//estos aumentos y decrementos junto con el timestamp donde ocurren
		for (let [s, e] of A) {
			data.push([s, 1]);
			data.push([e, -1])
		}
		//debemos ahora ordenar nuestro arreglo
		//para optimizar el tiempo debemos ordenar de forma que quede ordenado de forma
		//ascendente por los timestamps, si algunos timestamps son iguales, 
		//se pondrán primero en el orden, los que terminen primero
		data.sort((a, b) => {
			//si los timestamps son iguales de a y b
			//ordenamos de forma ascendente por su valor 
			//es decir primero irán los decrementos, y despues los incrementos
			//si no son iguales se ordena por el timestamp
			if (a[0] == b[0]) {
				return a[1] - b[1];
			} else {
				return a[0] - b[0]
			}
		});

		//declaramos 2 variables, una guardará el valor actual y otro la respuesta
		let [curr, ans] = [0, 0];

		//iteramos sobre nuestro arreglo ya ordenado de datos
		for (let [_, v] of data) {
			//vamos incrementando o decrementando nuestro valor actual segun salga en los valores
			curr += v;
			//al final la respuesta siempre será comparar en cada iteración lo que sea mayor
			//entre nuestro valor actual y lo que tengamos ya almacenado en la respuesta
			ans = Math.max(ans, curr);
		}

		return ans;
	}
};
