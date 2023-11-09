const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
    pool.query(queries.getStudentsQuery, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    })
}

const getStudentsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsQueryById, [id], (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    })
}

const addStudents = (req, res) => {
    const { name, age, dob } = req.body;
    pool.query(queries.checkNameExistsQuery, [name], (error, results) => {
        if (results.rows.length) {
            res.send("Name already exists");
        }
        pool.query(queries.addStudentQuery, [name, age, dob], (error, result) => {
            if (error) throw error;
            res.status(201).send("Student created succesfully");
        })
    })
}

const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsQueryById, [id], (error, result) => {
        if (error) throw error;
        if (result.rows.length === 0) res.status(200).send("No Student with that id exists")
        pool.query(queries.removeStudentQueryById, [id], (error, results) => {
            if(error) throw error;
            return res.status(200).send("Student removed succesfully");
        })
    })
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    pool.query(queries.getStudentsQueryById, [id], (error, result) => {
        if (error) throw error;
        if (result.rows.length === 0) res.status(200).send("No Student with that id exists")
        pool.query(queries.updateStudentQueryById, [name,id], (error, results) => {
            if(error) throw error;
            return res.status(200).send("Student updated succesfully");
        })
    })
}

module.exports = {
    getStudents,
    getStudentsById,
    addStudents,
    removeStudent,
    updateStudent
}