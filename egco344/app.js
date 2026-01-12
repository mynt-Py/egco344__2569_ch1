//node.js file for API to show gpa

const express = require('express');

const app = express();

// Mock student data
const students = [
    { id: '001', name: 'Alice Johnson', department: 'Computer Science', gpa: 3.8 },
    { id: '002', name: 'Bob Smith', department: 'Computer Science', gpa: 3.6 },
    { id: '003', name: 'Carol White', department: 'Electrical Engineering', gpa: 3.9 },
    { id: '004', name: 'David Brown', department: 'Electrical Engineering', gpa: 3.5 },
    { id: '005', name: 'Emma Davis', department: 'Civil Engineering', gpa: 3.7 },
    { id: '006', name: 'Frank Miller', department: 'Civil Engineering', gpa: 3.4 },
    { id: '007', name: 'Grace Lee', department: 'Mechanical Engineering', gpa: 3.9 },
    { id: '008', name: 'Henry Wilson', department: 'Mechanical Engineering', gpa: 3.6 }
];

// API to get all students GPA grouped by department
app.get('/api/students/gpa', (req, res) => {
    const groupedByDept = {};
    
    students.forEach(student => {
        if (!groupedByDept[student.department]) {
            groupedByDept[student.department] = [];
        }
        groupedByDept[student.department].push({
            id: student.id,
            name: student.name,
            gpa: student.gpa
        });
    });
    
    res.json(groupedByDept);
});

// API to get individual student GPA by student ID
app.get('/api/students/:studentId', (req, res) => {
    const student = students.find(s => s.id === req.params.studentId);
    
    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }
    
    res.json(student);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
