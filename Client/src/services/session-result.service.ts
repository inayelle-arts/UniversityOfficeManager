import {HttpServiceBase} from "@base/http-service.base";
import {SessionResult} from "@entities/session-result.entity";

export class SessionResultService extends HttpServiceBase<SessionResult>
{
	protected readonly baseUrl: string = '/api/session-results';
}