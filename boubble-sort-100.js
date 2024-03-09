function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
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
  
  logMessage("Iniciando el algoritmo Bubble Sort...");
    const timeTaken = measureTime(() => {
    bubbleSort(array);
  });
  
  logMessage("Algoritmo Bubble Sort terminado.");
  logMessage(`Tiempo total de ejecución: ${timeTaken.toFixed(4)} milisegundos`);
  