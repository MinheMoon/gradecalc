let StudentGrade = [85,90,78,92,88];

function calculateAverage(StudentGrade){
    const sum = studentGrade.reduce((acc, grade) => {
        if( grade < 0 || grade > 100){
            throw new Error("оцінка не підходить... вона повинна бути в межах 0-100");
        } 
        return acc + grade;
    }, 0);

    return sum / StudentGrade.length;
}

function showAverage() {
        document.getElementById('result').value = average.toFixed(2);
}