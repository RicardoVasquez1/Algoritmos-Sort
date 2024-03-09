
function buildHeap(array) {
    const n = array.length;
    for (let i = n / 2 - 1; i >= 0; i--) {
        heapify(array, i, n);
    }
}

function heapify(array, i, heapSize) {
    let largestIndex = i;
    const leftIndex = 2 * i + 1;
    const rightIndex = 2 * i + 2;

    if (leftIndex < heapSize && array[leftIndex] > array[largestIndex]) {
        largestIndex = leftIndex;
    }

    if (rightIndex < heapSize && array[rightIndex] > array[largestIndex]) {
        largestIndex = rightIndex;
    }

    if (largestIndex !== i) {
        [array[i], array[largestIndex]] = [array[largestIndex], array[i]];
        heapify(array, largestIndex, heapSize);
    }
}

function heapSort(array) {
    buildHeap(array);
    for (let i = array.length - 1; i >= 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        heapify(array, 0, i);
    }
}

const arraySize = 1000;
const array = Array.from({ length: arraySize }, (_, i) => arraySize - i);

console.log("Iniciando el algoritmo Heap Sort...");

const startTime = performance.now();
heapSort(array);
const endTime = performance.now();
const timeTaken = endTime - startTime;

console.log("Algoritmo Heap Sort terminado.");
console.log(`Tiempo total de ejecución: ${timeTaken.toFixed(4)} milisegundos`);
