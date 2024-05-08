let output = document.getElementById('output');
let resultCalculated = false;
let lastResult = null;
let operationHistory = [];

function appendToOutput(value) {
    if (resultCalculated) {
        output.value = ''; // Limpiar el campo de salida si se ha calculado un resultado previo
        resultCalculated = false;
    }
    output.value += value;
}

function clearOutput() {
    output.value = '';
    lastResult = null; // Reiniciar el último resultado cuando se borra la salida manualmente
}

function deleteChar() {
    output.value = output.value.slice(0, -1);
}

function calculate() {
    let input = output.value;
    let regex = /[\+\-\*\/]$/;
    if (!regex.test(input)) {
        try {
            let result = eval(input);
            if (isNaN(result) || !isFinite(result)) {
                output.value = 'Error';
            } else {
                output.value = result;
                lastResult = result; // Guardar el último resultado
                resultCalculated = true;
                operationHistory.push(input + '=' + result); // Guardar la operación y el resultado en el historial
            }
        } catch (error) {
            output.value = 'Error';
        }
    } else {
        output.value = 'Error';
    }
}

function useLastResult() {
    if (lastResult !== null) {
        output.value += lastResult;
    }
}

function useLastResultWithOperation(operation) {
    if (lastResult !== null) {
        output.value = lastResult + operation;
    }
}

function performLastOperationWithNumber(number) {
    if (lastResult !== null && operationHistory.length > 0) {
        let lastOperation = operationHistory[operationHistory.length - 1].split('=')[0];
        output.value = lastResult + lastOperation + number;
    }
}

function showOperationHistory() {
    let historyOutput = document.getElementById('history');
    historyOutput.innerHTML = '<h2>Historial de Operaciones</h2>';
    for (let i = 0; i < operationHistory.length; i++) {
        historyOutput.innerHTML += '<p>' + operationHistory[i] + '</p>';
    }
}
