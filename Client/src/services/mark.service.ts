import {HttpServiceBase} from "@base/http-service.base";
import {Mark} from "@entities/mark.entity";

export class MarkService extends HttpServiceBase<Mark>
{
	protected readonly baseUrl: string = '/api/marks';
}