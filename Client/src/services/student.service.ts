import {HttpServiceBase} from "@base/http-service.base";
import {Student} from "@entities/student.entity";

export class StudentService extends HttpServiceBase<Student>
{
	protected readonly baseUrl: string = '/api/students';
}