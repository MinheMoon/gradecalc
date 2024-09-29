let studentGrades = [85, 90, 78, 92, 88];

function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        if (typeof grades[i] !== 'number' || grades[i] < 0 || grades[i] > 100) {
            alert("Оцінка повинна бути в межах 0-100.");
            return;
        }
        sum += grades[i];
    }
    return sum / studentGrades.length;
}

function showAverage() {
    let average = calculateAverage(studentGrades);
    if (average !== undefined) {
        document.getElementById('result').value = average.toFixed(2);
    }
}