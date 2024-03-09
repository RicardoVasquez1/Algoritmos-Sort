function divideArray(array) {
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);
    return [leftArray, rightArray];
  }
  
  function mergeArrays(leftArray, rightArray) {
    const mergedArray = [];
    let i = 0, j = 0;
    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] < rightArray[j]) {
        mergedArray.push(leftArray[i]);
        i++;
      } else {
        mergedArray.push(rightArray[j]);
        j++;
      }
    }
    while (i < leftArray.length) {
      mergedArray.push(leftArray[i]);
      i++;
    }
    while (j < rightArray.length) {
      mergedArray.push(rightArray[j]);
      j++;
    }
    return mergedArray;
  }
  
  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    const [leftArray, rightArray] = divideArray(array);
    const sortedLeftArray = mergeSort(leftArray);
    const sortedRightArray = mergeSort(rightArray);
    return mergeArrays(sortedLeftArray, sortedRightArray);
  }
  
  function measureTime(callback) {
    const startTime = performance.now();
    callback();
    const endTime = performance.now();
    const timeTaken = endTime - startTime;
    return timeTaken;
  }
  
  
  function logMessage(message) {
    console.log(message);
  }
  

  const arraySize = 100;
  const array = Array.from({length: arraySize}, (_, i) => arraySize - i);
  
  logMessage("Iniciando el algoritmo Merge Sort...");

    const timeTaken = measureTime(() => {
    mergeSort(array);
  });
  
  logMessage("Algoritmo Merge Sort terminado.");
  logMessage(`Tiempo total de ejecución: ${timeTaken.toFixed(4)} milisegundos`);
  