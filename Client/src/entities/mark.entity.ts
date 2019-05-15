import { IEntity } from '@interfaces/entity.interface';
import { Tutor } from './tutor.entity';
import { Student } from './student.entity';
import { Subject } from './subject.entity';

export class Mark implements IEntity
{
	Id: number;
	Comment: string;
	CreatedAt: Date | string;

	SubjectId: number;
	Subject: Subject;

	TutorId: number;
	Tutor: Tutor;

	StudentId: number;
	Student: Student;
}