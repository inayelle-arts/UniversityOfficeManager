import { IEntity } from '@interfaces/entity.interface';
import { Group } from './group.entity';
import { Subject } from './subject.entity';

export class StudyPlan implements IEntity
{
	Id: number;
	Credits: number;

	SubjectId: number;
	Subject: Subject;

	GroupId: number;
	Group: Group;
}