import { Router } from 'express';
import { StudentController } from '../controllers/index';

const router = Router();
const studentController = new StudentController();

// Define routes for students
router.get('/students', studentController.getAllStudents.bind(studentController));
router.post('/students', studentController.createStudent.bind(studentController));
router.get('/students/:id', studentController.getStudentById.bind(studentController));
router.put('/students/:id', studentController.updateStudent.bind(studentController));
router.delete('/students/:id', studentController.deleteStudent.bind(studentController));

// Additional routes can be defined here

export default router;