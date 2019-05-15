import { IEntity } from '@interfaces/entity.interface';
import { Subject } from './subject.entity';
import { Tutor } from './tutor.entity';
import { Student } from './student.entity';

export class SessionResult implements IEntity
{
	Id: number;
	Mark: number;
	CreatedAt: Date | string;

	SubjectId: number;
	Subject: Subject;

	TutorId: number;
	Tutor: Tutor;

	StudentId: number;
	Student: Student;
}