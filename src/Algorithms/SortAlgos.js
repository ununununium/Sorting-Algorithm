let SLEEP_DIV = 4;

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function bubbleSort(swap, A, visit, unvisit, sleepSec, changeBarPos) {
  let n = A.length;
  changeBarPos(30 * 1);
  await sleep(sleepSec);

  for (var i = 0; i < n - 1; i++) {
    changeBarPos(30 * 2);
    await sleep(sleepSec);

    for (var j = 0; j < n - i - 1; j++) {
      // Change highlight position
      changeBarPos(30 * 3);
      visit(j);
      visit(j + 1);
      await sleep(sleepSec);

      changeBarPos(30 * 4);
      await sleep(sleepSec);

      if (parseInt(A[j].val._value) > parseInt(A[j + 1].val._value)) {
        swap(j, j + 1);
        changeBarPos(30 * 5);
        await sleep(sleepSec);
      }

      changeBarPos(30 * 6);
      unvisit(j);
      unvisit(j + 1);
      await sleep(sleepSec);

      changeBarPos(30 * 7);
      await sleep(sleepSec);
    }
    changeBarPos(30 * 8);
    await sleep(sleepSec);
  }
  changeBarPos(30 * 9);
  await sleep(sleepSec);
}

async function insertionSort(setValue, A, visit, unvisit, sleepSec) {
  let n = A.length;
  for (var i = 1; i < n; ++i) {
    visit(i);
    await sleep(sleepSec / SLEEP_DIV);

    let key = A[i].val._value;
    var j = i - 1;

    while (j >= 0 && A[j].val._value > key) {
      visit(j + 1);
      visit(j);
      await sleep(sleepSec / SLEEP_DIV);

      setValue(j + 1, A[j].val._value);
      await sleep(sleepSec);

      unvisit(j + 1);
      unvisit(j);
      await sleep(sleepSec / SLEEP_DIV);

      j = j - 1;
    }
    setValue(j + 1, key);
    await sleep(sleepSec);

    unvisit(i);
    await sleep(sleepSec / SLEEP_DIV);
  }
}

async function quickSort(A, low, high, swap, visit, unvisit, sleepSec) {
  async function partition(A, low, high, pi, swap, visit, unvisit, sleepSec) {
    var pivot = A[high].val._value;

    var i = low - 1;
    for (var j = low; j < high; j++) {
      visit(j);
      visit(high);
      await sleep(sleepSec / SLEEP_DIV);

      if (A[j].val._value < pivot) {
        i++;
        swap(i, j);
        await sleep(sleepSec);
      }

      unvisit(j);
      unvisit(high);
      await sleep(sleepSec / SLEEP_DIV);
    }

    visit(i + 1);
    visit(high);
    await sleep(sleepSec / SLEEP_DIV);

    swap(i + 1, high);
    await sleep(sleepSec);

    unvisit(i + 1);
    unvisit(high);
    await sleep(sleepSec / SLEEP_DIV);

    pi[0] = i + 1;
  }
  if (low < high) {
    var pi = [];
    await partition(A, low, high, pi, swap, visit, unvisit, sleepSec);

    await quickSort(A, low, pi[0] - 1, swap, visit, unvisit, sleepSec);
    await quickSort(A, pi[0] + 1, high, swap, visit, unvisit, sleepSec);
  }
}

async function heapSort(input, swap, visit, unvisit, sleepSec) {
  arrLength = input.length;

  async function maxHeap(input, i) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;

    if (left < arrLength && input[left].val._value > input[max].val._value) {
      visit(left);
      visit(max);
      await sleep(sleepSec / SLEEP_DIV);
      unvisit(left);
      unvisit(max);
      await sleep(sleepSec / SLEEP_DIV);

      max = left;
    }

    if (right < arrLength && input[right].val._value > input[max].val._value) {
      visit(right);
      visit(max);
      await sleep(sleepSec / SLEEP_DIV);
      unvisit(right);
      unvisit(max);
      await sleep(sleepSec / SLEEP_DIV);

      max = right;
    }

    if (max != i) {
      visit(i);
      visit(max);
      await sleep(sleepSec / SLEEP_DIV);

      swap(i, max);
      await sleep(sleepSec);

      unvisit(i);
      unvisit(max);
      await sleep(sleepSec / SLEEP_DIV);

      await maxHeap(input, max);
    }
  }

  for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
    await maxHeap(input, i);
  }

  for (i = input.length - 1; i > 0; i--) {
    visit(i);
    visit(0);
    await sleep(sleepSec / SLEEP_DIV);

    swap(0, i);
    await sleep(sleepSec);

    unvisit(i);
    unvisit(0);
    await sleep(sleepSec / SLEEP_DIV);

    arrLength--;
    await maxHeap(input, 0);
  }
  return;
}

async function knuthShuffle(array, swap, visit, unvisit, sleepSec) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    i = Math.floor(Math.random() * m--);
    visit(m);
    visit(i);
    await sleep(sleepSec / SLEEP_DIV);

    swap(m, i);
    await sleep(sleepSec);

    unvisit(m);
    unvisit(i);
    await sleep(sleepSec / SLEEP_DIV);
  }
}

const codeData = {
  bublleSort: [
    "bubbleSort(A){",
    "\tint n = A.length",
    "\tfor(int i = 0; i<n-1;i++){",
    "\t\tfor(int j = 0; j < n-1; j++){",
    "\t\t\tif(A[j] > A[j+1]){",
    "\t\t\t\tswap(A[j],A[j+1])",
    "\t\t\t}",
    "\t\t}",
    "\t}",
    "}",
  ],
  insertionSort: [],
  quickSort: [],
  heapSort: [],
  selectionSort: [],
  shellSort: [],
  slowSort: [],
  cocktailShakerSort: [],
};

const sortInfo = {
  bublleSort: {
    complexity: {
      worst: "O(n^2)",
      average: "O(n^2)",
      best: "O(n)",
      stable: "Yes",
    },
    desc:
      "Bubble sort is a simple algorithm that repeatedly steps through the list, compares adjacent pairs and swaps them if they are in the wrong order. This happens until the list is sorted.",
  },
  insertionSort: {
    complexity: {
      worst: "O(n^2)",
      average: "O(n^2)",
      best: "O(n)",
      stable: "Yes",
    },
    desc:
      "Insertion sort is a simple algorithm that repeatedly chooses value from the list and inserts it into the already partialy sorted array.",
  },
  quickSort: {
    complexity: {
      worst: "O(n^2)",
      average: "O(nlog(n))",
      best: "O(nlog(n))",
      stable: "Yes",
    },
    desc:
      "Quicksort is an efficient divide-and-conquer sorting algorithm that divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.",
  },
  heapSort: {
    complexity: {
      worst: "O(n^2)",
      average: "O(n^2)",
      best: "O(n)",
      stable: "Yes",
    },
    desc:
      "Insertion sort is a simple algorithm that repeatedly chooses value from the list and inserts it into the already partialy sorted array.",
  },
  selectionSort: {
    complexity: {
      worst: "O(n^2)",
      average: "O(n^2)",
      best: "O(n)",
      stable: "No",
    },
    desc:
      "Selection sort is a simple sorting algorithm that is a slower version of heapsort. It divides the array into a sorted and unsorted region and moves the biggest value from the unsorted region to the sorted region shrinking search area. Uses linear search to find the biggest value",
  },
  shellSort: {
    complexity: {
      worst: "O(n^4/3)",
      average: "O(nlog(n))",
      best: "O(nlog(n))",
      stable: "Nos",
    },
    desc:
      "Shell sort is an efficient sorting algorithm that sorts values far apart from each other and then progressively reduces the gap between values to be compared.",
  },
  slowSort: {
    complexity: {
      worst: "O(nlog(n))",
      average: "O(nlog(n))",
      best: "O(nlog(n))",
      stable: "No",
    },
    desc:
      "Slow sort is a humorous and not really useful algorithm. It is based on a principal of multiply-and-surrender-a converse of divide-and-conquer approach",
  },
  cocktailShakerSort: {
    complexity: {
      worst: "O(n^2)",
      average: "O(n^2)",
      best: "O(n)",
      stable: "Yes",
    },
    desc:
      "Cocktail shaker sort is a variation of a bubble sort where the algorithm sorts in both directions when it passes through the list. This helps to avoid turtles in bubble sort but doesn't really change the asymptotic performance.",
  },
};
export {
  bubbleSort,
  insertionSort,
  quickSort,
  heapSort,
  knuthShuffle,
  codeData,
  sortInfo,
};
