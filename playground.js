function gradingStudents(grades) {
    var n = grades[0];
    var gradeTable = [];
    var grade;
    for(let i=1; i<=n; i++) {
        grade = grades[i];
        if (grade>=38) {
            for (let r=0; r<6; r++) {
                var nextup = grade + r;
                if (nextup % 5 == 0 && r<3) {
                    grade = nextup;
                }
            }
        }
        gradeTable.push(grade);
    }
     return gradeTable;
 }

var testcase = [39,27,0,56,47,38,12,98,72,85,76,72,56,23,77,25,49,4,52,71,43,11,2,44,10,20,3,90,64,48,31,56,51,70,91,14,25,61,41,0]

var result = gradingStudents(testcase);
console.log(result);