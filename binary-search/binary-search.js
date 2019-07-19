'use strict';

// Complete this algo
function binarySearch(arr, target) {
	let left = 0;
	let right = arr.length-1;
	while (left <= right) {
	  let mid = Math.floor((left + right) / 2);
	  if (target === arr[mid]) {
		return true;
	  } else if (arr[mid] < target) {
		left = mid + 1;
	  } else {
		right = mid - 1;
	  }
	}
	return false;
  }
  
  // O(log n)
//   binarySearch([1,2,3,4,5], 2)

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch