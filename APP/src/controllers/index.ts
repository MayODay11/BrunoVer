import { Request, Response } from 'express';

class StudentController {
    public async getAllStudents(req: Request, res: Response): Promise<Response> {
        // Lógica para obter todos os estudantes
        return res.json({ message: 'List of all students' });
    }

    public async createStudent(req: Request, res: Response): Promise<Response> {
        // Lógica para criar um novo estudante
        return res.status(201).json({ message: 'Student created' });
    }

    // Outros métodos relacionados a estudantes podem ser adicionados aqui
}

class TeacherController {
    public async getAllTeachers(req: Request, res: Response): Promise<Response> {
        // Lógica para obter todos os professores
        return res.json({ message: 'List of all teachers' });
    }

    public async createTeacher(req: Request, res: Response): Promise<Response> {
        // Lógica para criar um novo professor
        return res.status(201).json({ message: 'Teacher created' });
    }

    // Outros métodos relacionados a professores podem ser adicionados aqui
}

export { StudentController, TeacherController };