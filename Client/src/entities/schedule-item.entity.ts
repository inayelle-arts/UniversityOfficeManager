import { IEntity } from '@interfaces/entity.interface';
import { DayOfWeek } from './day-of-week.entity';
import { Group } from './group.entity';
import { Room } from './room.entity';
import { Week } from './week.entity';
import { Subject } from './subject.entity';
import { Tutor } from './tutor.entity';

export class ScheduleItem implements IEntity
{
	id: number;
	day: DayOfWeek;
	week: Week;
	orderNumber: number;

	subjectId: number;
	subject: Subject;

	groupId: number;
	group: Group;

	tutorId: number;
	tutor: Tutor;

	roomId: number;
	room: Room;
}