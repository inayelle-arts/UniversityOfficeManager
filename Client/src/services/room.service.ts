import {HttpServiceBase} from "@base/http-service.base";
import {Room} from "@entities/room.entity";

export class RoomService extends HttpServiceBase<Room>
{
	protected readonly baseUrl: string = '/api/rooms';
}