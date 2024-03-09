function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      const currentElement = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > currentElement) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = currentElement;
    }
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
  
  logMessage("Iniciando el algoritmo Insertion Sort...");
  
  const timeTaken = measureTime(() => {
    insertionSort(array);
  });
  
  logMessage("Algoritmo Insertion Sort terminado.");
  logMessage(`Tiempo total de ejecución: ${timeTaken.toFixed(4)} milisegundos`);
  