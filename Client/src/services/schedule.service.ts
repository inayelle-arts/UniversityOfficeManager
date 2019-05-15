import {HttpServiceBase} from "@base/http-service.base";
import {ScheduleItem} from "@entities/schedule-item.entity";

export class ScheduleService extends HttpServiceBase<ScheduleItem>
{
	protected readonly baseUrl: string = '/api/schedule';
}