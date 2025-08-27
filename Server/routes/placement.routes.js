const express = require('express');
const student = require('../models/Student.model');
const router = express.Router();





router.get('/placement_data', async(req, res) => {
    try {
        const students = await student.find()
        res.json(students)
    } catch (error) {
        res.status(500).json({ message:"Error fetching Students", error})
    }
});



router.post('/addPlacement', async(req, res) => {
    
   try {
    console.log('Incoming data:', req.body);  // ✅ log the request
    const newStudent = new student(req.body);
    await newStudent.save();
    res.status(201).json({ message: 'Student added successfully' });
  } catch (error) {
    console.error('Error adding student:', error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});














module.exports = router;