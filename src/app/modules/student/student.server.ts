import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (student: TStudent) => {
  if (await Student.isUserExists(student.id as string)) {
    throw new Error('This user already exist!');
  }
  const result = await Student.create(student);
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  // return result;
  const result = await Student.aggregate([{ $match: { id } }]);
  return result;
};

const deleteSingleStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id: id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
