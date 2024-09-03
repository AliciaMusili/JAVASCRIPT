// TASK - using an if else if statement , build a grading system with the following conditions
//condtions >80 A, >65 B , >50 C, >40 D  , <41 E
// <0 or >100 is an invalid mark (not be graded)

function gradeSystem(mark) {
    if (mark < 0 || mark > 100) {
        return "Invalid mark (not be graded)";
    } else if (mark > 80) {
        return "A";
    } else if (mark > 65) {
        return "B";
    } else if (mark > 50) {
        return "C";
    } else if (mark > 40) {
        return "D";
    } else {
        return "E";
    }
}

// Example usage
const marks = [85, 70, 55, 45, 30, -5, 105];
marks.forEach(mark => {
    console.log(`Mark: ${mark}, Grade: ${gradeSystem(mark)}`);
});


//redo it with switch statement

function gradeSystem(mark) {
    switch (true) {
        case (mark < 0 || mark > 100):
            return "Invalid mark (not be graded)";
        case (mark > 80):
            return "A";
        case (mark > 65):
            return "B";
        case (mark > 50):
            return "C";
        case (mark > 40):
            return "D";
        default:
            return "E";
    }
}

// Example usage
const marks = [85, 70, 55, 45, 30, -5, 105];
[85, 70, 55, 45, 30, -5, 105].forEach(mark => {
    console.log(`Mark: ${mark}, Grade: ${gradeSystem(mark)}`);
});


// EXPLAIN the logEvenNumbers function
 
