function gradingStudents(grades) {
    var roundedGrade = grades.map(function (el) {
        if (el % 5 === 3 && el > 37) {
            return el += 2
        }
        if (el % 5 === 4 && el > 37) {
            return el += 1
        }
        return el
    })
    return roundedGrade
}

link: https://www.hackerrank.com/challenges/grading/problem