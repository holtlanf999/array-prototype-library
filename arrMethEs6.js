( () => {
	var a = Array.prototype;
	var result = 0;
	var i = 0;

	let sum = function () {
		i = 0;
		for (; i < this.length; i++) {
			result = result + this[i];
			console.log('Suma: ', result);
		}
		return result
	}

	let rest = function () {
		i = 0;
		for (; i < this.length; i++) {
			result = this[i] - result ;
			console.log('Resta =', result);
		}
		return result
	}

	let mult = function () {
		i = 0;
		result = 1;
		for (; i < this.length; i++) {
			result = this[i] * result;
			console.log('Multiplicación =', result);
		}
		return result
	}

	let divi = function () {
		i = 0;
		result = 1;
		var sorted = this.sort(function(a, b){return b-a});
		console.log(sorted);
		for (; i < this.length; i++) {
			result = sorted[i] / result;
			console.log('División =', result);
		}
		return result
	}

	let extractByType = function () {
		i = 0;
		
		var typeCheck = [];

		for (; i < this.length; i++) {
			if (typeof this[i] === Number) { 
				var numberResult = numberResult.push(this[i]);
				console.log(numberResult);
			} else if (typeof this[i] === String) {
				var stringResult = stringResult.push(this[i]);
				console.log(stringResult);
			} else if (typeof this[i] === Boolean) {
				var booleanResult = booleanResult.push(this[i]);
				console.log(booleanResult);
			} else if (typeof this[i] === Object) {
				var objectResult = objectResult.push(this[i]);
				console.log(objectResult);
			}
		}
	}

	function pluck(prop) {
		i = 0;
		result = 0;
		var list = this;

		for (; i < this.length; i++) {
			result = this[i][prop];
			console.log(result);
		}
	}

	a.sum = sum;
	a.rest = rest;
	a.mult = mult;
	a.div = divi;
	a.extractByType = extractByType;
 	a.pluck = pluck;

})();