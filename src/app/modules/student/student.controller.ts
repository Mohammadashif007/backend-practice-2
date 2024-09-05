import { Request, Response } from 'express';
import { StudentServices } from './student.server';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: true,
      message: error.message || 'Something went wrong!',
      data: error,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'All student retrieve successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: true,
      message: error.message || 'Something went wrong!',
      data: error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Single student retrieve successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: true,
      message: error.message || 'Something went wrong!',
      data: error,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student deleted successfully from DB',
      data: result,
    });
  } catch (error: any) {
    res.status(200).json({
      success: true,
      message: error.message || 'Something went wrong!',
      data: error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  deleteStudent,
};
