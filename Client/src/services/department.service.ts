import {HttpServiceBase} from "@base/http-service.base";
import {Department} from "@entities/department.entity";

export class DepartmentService extends HttpServiceBase<Department>
{
	protected readonly baseUrl: string = '/api/departments';
}