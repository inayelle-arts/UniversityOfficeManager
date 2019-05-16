import { IEntity } from '@interfaces/entity.interface';
import { Tutor } from './tutor.entity';
import { Student } from './student.entity';
import { Subject } from './subject.entity';

export class Mark implements IEntity
{
	id: number;
	comment: string;
	createdAt: Date | string;

	subjectId: number;
	subject: Subject;

	tutorId: number;
	tutor: Tutor;

	studentId: number;
	student: Student;
}