import {HttpServiceBase} from "@base/http-service.base";
import {Speciality} from "@entities/speciality.entity";

export class SpecialityService extends HttpServiceBase<Speciality>
{
	protected readonly baseUrl: string = '/api/specialities';
}