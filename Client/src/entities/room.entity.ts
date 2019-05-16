import { IEntity } from '@interfaces/entity.interface';
import { RoomType } from './room-type.entity';

export class Room implements IEntity
{
	id: number;
	code: string;
	capacity: number;
	type: RoomType;
}