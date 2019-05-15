import {HttpServiceBase} from "@base/http-service.base";
import {Subject} from "@entities/subject.entity";

export class SubjectService extends HttpServiceBase<Subject>
{
	protected readonly baseUrl: string = '/api/subjects';
}