const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function bubbleSort(swap, A, visit, unvisit, sleepSec) {
	let n = A.length;

	for (var i = 0; i < n - 1; i++) {
		for (var j = 0; j < n - i - 1; j++) {
			visit(j);
			visit(j + 1);
			await sleep(sleepSec);

			if (parseInt(A[j].val._value) > parseInt(A[j + 1].val._value)) {
				swap(j, j + 1);
				await sleep(sleepSec);
			}

			unvisit(j);
			unvisit(j + 1);
			await sleep(sleepSec);
		}
	}
}

async function insertionSort(setValue, A, visit, unvisit, sleepSec) {
	let n = A.length;
	for (var i = 1; i < n; ++i) {
		// let key = arr[i];
		visit(i);
		await sleep(sleepSec);

		let key = A[i].val._value;
		var j = i - 1;

		/* Move elements of arr[0..i-1], that are 
		   greater than key, to one position ahead 
		   of their current position */
		while (j >= 0 && A[j].val._value > key) {
			// A[j + 1] = arr[j];
			visit(j + 1);
			visit(j);
			await sleep(sleepSec);

			setValue(j + 1, A[j].val._value);
			await sleep(sleepSec);

			unvisit(j + 1);
			unvisit(j);
			await sleep(sleepSec);

			j = j - 1;
		}
		// A[j + 1] = key;
		setValue(j + 1, key);
		unvisit(i);
		await sleep(sleepSec);
	}
}

export { bubbleSort, insertionSort };
