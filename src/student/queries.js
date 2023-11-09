const getStudentsQuery = "SELECT * FROM student";
const getStudentsQueryById = "SELECT * FROM student WHERE id = $1";
const checkNameExistsQuery = "SELECT s FROM student s WHERE s.name = $1";
const addStudentQuery = "INSERT INTO student (name,age,dob) VALUES ($1,$2,$3)";
const removeStudentQueryById = "DELETE FROM student WHERE id = $1";
const updateStudentQueryById = "UPDATE student SET name = $1 WHERE id = $2";

module.exports = {
    getStudentsQuery,
    getStudentsQueryById,
    checkNameExistsQuery,
    addStudentQuery,
    removeStudentQueryById,
    updateStudentQueryById
}