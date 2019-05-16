import { IEntity } from '@interfaces/entity.interface';
import { Group } from './group.entity';
import { Subject } from './subject.entity';

export class StudyPlan implements IEntity
{
	id: number;
	credits: number;

	subjectId: number;
	subject: Subject;

	groupId: number;
	group: Group;
}