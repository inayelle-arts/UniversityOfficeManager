import { IEntity } from '@interfaces/entity.interface';
import { Speciality } from './speciality.entity';
import { Department } from './department.entity';

export class Group implements IEntity
{
	Id: number;
	Name: string;

	SpecialityId: number;
	Speciality: Speciality;

	DepartmentId: number;
	Department: Department;
}