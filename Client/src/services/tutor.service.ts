import {HttpServiceBase} from "@base/http-service.base";
import {Tutor} from "@entities/tutor.entity";

export class TutorService extends HttpServiceBase<Tutor>
{
	protected readonly baseUrl: string = '/api/tutors';
}