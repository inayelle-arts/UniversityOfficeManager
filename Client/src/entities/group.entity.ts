import { IEntity } from '@interfaces/entity.interface';
import { Speciality } from './speciality.entity';
import { Department } from './department.entity';

export class Group implements IEntity
{
	id: number;
	name: string;

	specialityId: number;
	speciality: Speciality;

	departmentId: number;
	department: Department;
}