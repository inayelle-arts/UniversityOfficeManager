import { IEntity } from '@interfaces/entity.interface';

export class Department implements IEntity
{
	Id: number;
	FullName: string;
	Abbreviation: string;
}