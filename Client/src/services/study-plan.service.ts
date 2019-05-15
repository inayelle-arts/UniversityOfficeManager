import {HttpServiceBase} from "@base/http-service.base";
import {StudyPlan} from "@entities/study-plan.entity";

export class StudyPlanService extends HttpServiceBase<StudyPlan>
{
	protected readonly baseUrl: string = '/api/study-plans';
}