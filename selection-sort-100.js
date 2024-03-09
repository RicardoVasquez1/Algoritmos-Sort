function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
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
  
  logMessage("Iniciando el algoritmo Selection Sort...");
  
  const timeTaken = measureTime(() => {
    selectionSort(array);
  });
  
  logMessage("Algoritmo Selection Sort terminado.");
  
  logMessage(`Tiempo total de ejecución: ${timeTaken.toFixed(4)} milisegundos`);
  