const express = require('express');
const student = require('../models/Student.model');
const Super30 = require('../models/Super30.model')
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
    console.log('Incoming data:', req.body); 
    const newStudent = new student(req.body);
    await newStudent.save();
    res.status(201).json({ message: 'Student added successfully' });
  } catch (error) {
    console.error('Error adding student:', error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});



router.get('/Super_30_data', async(req, res) => {

 try {
      const SuperStudents = await Super30.find()
      res.json(SuperStudents)
 } catch (error) {
     res.status(500).json({ message:"Error fetching Superstudents", error})
 }

})



router.post('/addSuper30', async(req, res) => {
  
  try {
     console.log(req.body);

     const SuperStudent = new Super30(req.body)

  await SuperStudent.save()
  res.json({message:"Student Added Successfully", Superstudent: SuperStudent})

  } catch (error) {
      console.error("Error saving student:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
})











module.exports = router;