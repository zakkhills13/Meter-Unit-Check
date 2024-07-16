function calculateConsumption() {
    const amperes = parseFloat(document.getElementById('amperes').value);
    const volts = 220;

    if (isNaN(amperes) || amperes <=0) {
        document.getElementById('result').textContent = 'Only Use Positive Numbers.';
        return;
    }

    const unitsPerHour = (amperes * volts ) / 1000;
    document.getElementById('result').textContent = `Units Per Hour: ${unitsPerHour.toFixed(2)}`
}