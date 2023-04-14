//https://www.interviewbit.com/problems/interview-questions/
// N light bulbs are connected by a wire.

// Each bulb has a switch associated with it, however due to faulty wiring, a switch also changes the state 
//of all the bulbs to the right of current bulb.

// Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all 
//the bulbs.

// You can press the same switch multiple times.

// Note : 0 represents the bulb is off and 1 represents the bulb is on.
module.exports = {
	//param A : array of integers
	//return an integer
	bulbs: function (A) {
		let cost = 0;
		let el;

		for (let i = 0; i < A.length; i++) {
			el = A[i];

			if (cost % 2 === 0) el = el;
			else el = !el

			if (el % 2 === 1) continue;
			else cost += 1;
		}

		return cost;
	}
};
