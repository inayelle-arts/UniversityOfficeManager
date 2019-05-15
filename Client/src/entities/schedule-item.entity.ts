import { IEntity } from '@interfaces/entity.interface';
import { DayOfWeek } from './day-of-week.entity';
import { Group } from './group.entity';
import { Room } from './room.entity';
import { Week } from './week.entity';
import { Subject } from './subject.entity';
import { Tutor } from './tutor.entity';

export class ScheduleItem implements IEntity
{
	Id: number;
	Day: DayOfWeek;
	Week: Week;
	OrderNumber: number;

	SubjectId: number;
	Subject: Subject;

	GroupId: number;
	Group: Group;

	TutorId: number;
	Tutor: Tutor;

	RoomId: number;
	Room: Room;
}