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

export { bubbleSort };
