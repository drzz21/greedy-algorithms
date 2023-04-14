//https://www.interviewbit.com/problems/highest-product/

// Given an array A, of N integers A.
// Return the highest product possible by multiplying 3 numbers from the array.
// NOTE: The solution will fit in a 32-bit signed integer.

module.exports = {
	//param A : array of integers
	//return an integer
	maxp3: function (A) {
		A = A.sort((a, b) => a - b);
		let len = A.length;
		let hi3 = A[len - 1] * A[len - 2] * A[len - 3];
		let lo2hi1 = A[0] * A[1] * A[len - 1]

		return Math.max(hi3, lo2hi1);

	}
};

// Para obtener el máximo producto de 3 números tenemos 2 oppciones, ya que sabemos
// que al multiplicar 2 numeros negativos, el resultado nos da un número positivo,
// debemos sacar el producto usando los 2 numeros más negativos que tengamos
// con el número mas alto positivo, esto nos daría un número positivo alto,
// este resultado lo debemos comparar con el resultado de hacer la operación con los 
// tres números positivos más alto y al final retornar el número más alto de estas dos operaciones
// y este sería el resultado final
