import { IEntity } from '@interfaces/entity.interface';

export class Department implements IEntity
{
	id: number;
	fullName: string;
	abbreviation: string;
}