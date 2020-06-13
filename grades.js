/*
Main Goal: Have a function that can print a report card based on student's grades 
*/

/*********************** FUNCTIONS ***********************/


/*
Takes an array of integers and calculates the average
Parameters
- numbers: Array of integers
Return
- float (decimal number): average of all integers in the array 
*/
const calculateAverage = (numbers) => {
    
    /* WRITE CODE HERE */

};



/*
Finds the student in the list of class grades and calculates the student's
average homework grade
Parameters
- classGrades: Array of Objects with the following properties
{
        studentName: String,
        homeworkGrades: Array of integers,
        testGrades: Array of integers
}
- name: String (name of student that we're looking for inside classGrades)

Returns: float (decimal number):  average homework grade
*/
const calculateHomeworkAverage = (classGrades, name) => {

    /* WRITE CODE HERE */
    /* HINT: Use calculateAverage() function */

};



/*
Finds the student in the list of class grades and calculates the 
student's average test grade
Parameters
- classGrades: Array of Objects with the following properties
{
        studentName: String,
        homeworkGrades: Array of integers,
        testGrades: Array of integers
}
- name: String (name of student that we're looking for inside classGrades)

Returns: float (decimal number):  average homework grade
*/
const calculateTestAverage = (classGrades, name) => {

    /* WRITE CODE HERE */
    /* HINT: Use calculateAverage() function */

};


/*
Prints the average grades of the student specified
Parameters
- classGrades: Array of Objects with the following properties
{
        studentName: String,
        homeworkGrades: Array of integers,
        testGrades: Array of integers
}
Returns: Nothing
Side Effect (What happens): Prints the following to the console

<Student Name>
Homework Average: _____
Test Average: ______
*/
const printStudentReport = (classGrades, studentName) => {
    /* WRITE CODE HERE */
    /* HINT: use calculateHomeworkAverage() and calculateTestAverage() */ 
};


/*********************** TESTING ***********************/
let myClassGrades = [
    
    {
        studentName: "Ania",
        homeworkGrades: [90,85,100,80,83,92],
        testGrades: [98,80,99,89]
    },
    {
        studentName: "Michael",
        homeworkGrades: [75,79,100,95,68,75],
        testGrades: [88,92,89,95]
    },
    {
        studentName: "Sarah",
        homeworkGrades: [100,89,79,93,100,75],
        testGrades: [92,100,89,93]
    }
];

printStudentReport(myClassGrades, "Michael");
