import { IEntity } from '@interfaces/entity.interface';
import { Department } from './department.entity';
import {Gender} from "@entities/gender.entity";

export class Tutor implements IEntity
{
	id: number;
	
	firstName: string;
	middleName: string;
	lastName: string;
	series: string;
	code: string;
	birthday: Date | string;
	gender: Gender;
	
	academicDegree: string;

	departmentId: number;
	department: Department;
}