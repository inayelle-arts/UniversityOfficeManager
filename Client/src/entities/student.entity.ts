import { IEntity } from '@interfaces/entity.interface';
import { Group } from './group.entity';
import {Gender} from "@entities/gender.entity";

export class Student implements IEntity
{
	id: number;
	
	firstName: string;
	middleName: string;
	lastName: string;
	series: string;
	code: string;
	birthday: Date | string;
	gender: Gender;
	
	recordBookSeries: string;
	recordBookCode: string;

	groupId: number;
	group: Group;
}