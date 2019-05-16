import { IEntity } from '@interfaces/entity.interface';
import { Subject } from './subject.entity';
import { Tutor } from './tutor.entity';
import { Student } from './student.entity';

export class SessionResult implements IEntity
{
	id: number;
	mark: number;
	createdAt: Date | string;

	subjectId: number;
	subject: Subject;

	tutorId: number;
	tutor: Tutor;

	studentId: number;
	student: Student;
}