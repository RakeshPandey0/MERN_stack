//Work on this array of objects.
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 48 },
    { name: 'David', score: 74 },
    { name: 'Eve', score: 68 }
];

//Use map() to create array of student names.
const student_names=students.map((student)=>student.name);
console.log(student_names);

// Use filter() to create an array of students who have a score greater than or equal to 75.

const student_score_filter=students.filter((student)=>student.score>=75);
console.log(student_score_filter);

//Use reduce() to calculate average score of all students.
const average=(students.reduce((total, current)=>total + current.score, 0))/students.length;
console.log(average);

//Use forEach() to print each for each students name and score
function toPrint(student){
    console.log(`Name:${student.name}, Score:${student.score}`);
}
students.forEach(toPrint);

