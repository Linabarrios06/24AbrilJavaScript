let output = document.getElementById('output');

function appendToOutput(value) {
    output.value += value;
}

function clearOutput() {
    output.value = '';
}

function deleteChar() {
    output.value = output.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(output.value);
        if (result === undefined)
            output.value = '';
        else
            output.value = result;
    } catch (error) {
        output.value = 'Error';
    }
}
