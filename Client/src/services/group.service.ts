import {HttpServiceBase} from "@base/http-service.base";
import {Group} from "@entities/group.entity";

export class GroupService extends HttpServiceBase<Group>
{
	protected readonly baseUrl: string = '/api/groups';
}