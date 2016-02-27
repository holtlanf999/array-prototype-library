'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function () {
	var a = Array.prototype;
	var result = 0;
	var i = 0;

	var sum = function sum() {
		i = 0;
		for (; i < this.length; i++) {
			result = result + this[i];
			console.log('Suma: ', result);
		}
		return result;
	};

	var rest = function rest() {
		i = 0;
		for (; i < this.length; i++) {
			result = this[i] - result;
			console.log('Resta =', result);
		}
		return result;
	};

	var mult = function mult() {
		i = 0;
		result = 1;
		for (; i < this.length; i++) {
			result = this[i] * result;
			console.log('Multiplicación =', result);
		}
		return result;
	};

	var divi = function divi() {
		i = 0;
		result = 1;
		var sorted = this.sort(function (a, b) {
			return b - a;
		});
		console.log(sorted);
		for (; i < this.length; i++) {
			result = sorted[i] / result;
			console.log('División =', result);
		}
		return result;
	};

	var extractByType = function extractByType() {
		i = 0;

		var typeCheck = [];

		for (; i < this.length; i++) {
			if (_typeof(this[i]) === Number) {
				var numberResult = numberResult.push(this[i]);
				console.log(numberResult);
			} else if (_typeof(this[i]) === String) {
				var stringResult = stringResult.push(this[i]);
				console.log(stringResult);
			} else if (_typeof(this[i]) === Boolean) {
				var booleanResult = booleanResult.push(this[i]);
				console.log(booleanResult);
			} else if (_typeof(this[i]) === Object) {
				var objectResult = objectResult.push(this[i]);
				console.log(objectResult);
			}
		}
	};

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
