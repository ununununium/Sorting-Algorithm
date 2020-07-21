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

async function partition(A, low, high, pi, swap, visit, unvisit, sleepSec) {
	var pivot = A[high].val._value;

	var i = low - 1; // index of smaller element
	for (var j = low; j < high; j++) {
		visit(j);
		visit(high);
		await sleep(sleepSec);

		// If current element is smaller than the pivot
		if (A[j].val._value < pivot) {
			i++;

			// swap arr[i] and arr[j]
			// int temp = arr[i];
			// arr[i] = arr[j];
			// arr[j] = temp;
			visit(i);
			visit(j);
			await sleep(sleepSec);

			swap(i, j);
			await sleep(sleepSec);

			unvisit(i);
			unvisit(j);
			await sleep(sleepSec);
		}

		unvisit(j);
		unvisit(high);
		await sleep(sleepSec);
	}

	// swap arr[i+1] and arr[high] (or pivot)
	// int temp = arr[i+1];
	// arr[i+1] = arr[high];
	// arr[high] = temp;

	visit(i + 1);
	visit(high);
	await sleep(sleepSec);

	swap(i + 1, high);
	await sleep(sleepSec);

	unvisit(i + 1);
	unvisit(high);
	await sleep(sleepSec);

	pi[0] = i + 1;
}

async function quickSort(A, low, high, swap, visit, unvisit, sleepSec) {
	if (low < high) {
		var pi = [];
		await partition(A, low, high, pi, swap, visit, unvisit, sleepSec);

		await quickSort(A, low, pi[0] - 1, swap, visit, unvisit, sleepSec);
		await quickSort(A, pi[0] + 1, high, swap, visit, unvisit, sleepSec);
	}
}

export { bubbleSort, insertionSort, quickSort };
