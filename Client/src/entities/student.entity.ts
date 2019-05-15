import { IEntity } from '@interfaces/entity.interface';
import { PassportInfo } from './passport-info.entity';
import { Group } from './group.entity';

export class Student implements IEntity
{
	Id: number;
	RecordBookSeries: string;
	RecordBookCode: string;

	PassportInfoId: number;
	PassportInfo: PassportInfo;

	GroupId: number;
	Group: Group;
}