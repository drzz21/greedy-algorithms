// Given an integer array A of size N consisting of unique integers from 1 to N. You can swap any two integers atmost B times.

// Return the largest lexicographical value array that can be created by executing atmost B swaps.

//Encontrar el numero mas alto que podemos hacer con los enteros de un arreglo, intercambiando los valores
//de sus posiciones de acuerdo al valor del segundo argumento
// es decir si tenemos como entrada [1,3,2],1
// debemos encontrar el numero mas alto que podamos hacer con esos numeros, intercambiando solo
//1 vez dos numeros, en este caso seria el numero [3,1,2] que saldria de intercambiar el 1 y el 3

module.exports = {
	//param A : array of integers
	//param B : integer
	//return a array of integers
	solve: function (A, B) {
		//iniciamos nuestra variable que nos permitirá
		//usar el while para iterar, sin excedernos de la longitud del arreglo A
		let i = 0;
		// definimos _max como la longitud del arreglo, esto es porque 
		//nuestras constraints del ejercicio dicen que el arreglo contendra numeros desde 1 
		//hasta la longitud del arreglo por lo tanto sabemos que el maximo numero que podemos
		//insertar será el de la longitud del arreglo, en cada iteración irá disminuyendo
		//porque el maximo anterior ya estará colocado en su posición correcta
		let _max = A.length;
		let d = {};
		//creamos un diccionario en un objeto, donde
		//cada elemento del diccionario, es decir cada clave, será el valor
		//del elemento del arreglo, y cada valor, será el valor del indice
		//de ese elemento en el arreglo, esto nos dará al final
		//un diccionario donde tendremos los numeros del arreglo y su posicion 
		//en el arreglo original.
		A.forEach(function (x, i) {
			d[x] = i;
		});

		//procedemos a iterar, mientras nuestro elemento B, que es la cantidad
		//de swaps que podemos hacer, sea mayor a cero (se va a disminuir cada que
		//nuestro i y nuestro j sean diferentes, porque se hará un swap)
		//, y mientras nuestro i que es nuestro iterador sea menor a la longitud del arreglo
		//(i se va a incrementar cada que se ejecute el loop), se ejecutará el loop
		while (B && i < A.length) {
			//asignamos a una constante j el valor de nuestro diccionario
			//donde está el maximo valor que podemos hacer swap, esto nos dará
			//el valor del indice del máximo valor
			//este valor del indice del maximo valor, debería en teoría coincidir con
			//el valor del indice del iterador que estamos usando, esto nos indicaría
			//que el máximo valor está en su posición correcta, en caso de que esto no sea así, habríá
			//que hacer swap
			const j = d[_max];
			//si el indice i y el indice j son iguales no se hace swap, solo se incrementa i
			//y se disminuye max, no se hace intercambio porque no será necesario al volver a quedar
			//iguales los valores, sería como si no se hubiera hecho swap
			//si son diferentes entonces se hace el swap porque significaria que el numero maximo, que es j
			//no está en la posición correcta
			if (i != j) {
				//se decrementa B que contiene el numero de swaps
				B -= 1;
				//se intercambian en el arreglo las posiciones i y j
				[A[i], A[j]] = [A[j], A[i]];
				//ademas que tambien debemos hacer este intercambio en nuestro diccionario
				//para tener la nueva actualización de los indices correspondientes
				[
					d[A[i]], d[A[j]]
				] = [
						d[A[j]], d[A[i]]
					];
			}
			//incrementamos nuestro contador y disminuimos
			//el numero maximo a colocar en cada swap, estos incrementos
			//se realizan con cada iteración
			i++;
			_max--;

		}
		//retornamos el arreglo A, que ya está ordenado con los
		//swaps correspondientes
		return A;

	}
};
