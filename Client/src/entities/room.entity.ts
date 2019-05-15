import { IEntity } from '@interfaces/entity.interface';
import { RoomType } from './room-type.entity';

export class Room implements IEntity
{
	Id: number;
	Code: string;
	Capacity: number;
	Type: RoomType;
}