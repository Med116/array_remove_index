module.exports = function(arr,arrIndex){
	return arr.slice(0,arrIndex).concat(arr.slice(arrIndex + 1));
}
