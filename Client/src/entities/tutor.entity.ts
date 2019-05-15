import { IEntity } from '@interfaces/entity.interface';
import { PassportInfo } from './passport-info.entity';
import { Department } from './department.entity';

export class Tutor implements IEntity
{
	Id: number;
	AcademicDegree: string;

	PassportInfoId: number;
	PassportInfo: PassportInfo;

	DepartmentId: number;
	Department: Department;
}