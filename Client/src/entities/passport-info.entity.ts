import { IEntity } from '@interfaces/entity.interface';
import { Gender } from './gender.entity';

export class PassportInfo implements IEntity
{
	Id: number;
	FirstName: string;
	MiddleName: string;
	LastName: string;
	Series: string;
	Code: string;
	Birthday: Date | string;
	Gender: Gender;
}