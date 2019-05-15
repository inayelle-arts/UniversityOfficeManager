import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {DepartmentService} from "@services/department.service";
import {GroupService} from "@services/group.service";
import {MarkService} from "@services/mark.service";
import {RoomService} from "@services/room.service";
import {ScheduleService} from "@services/schedule.service";
import {SessionResultService} from "@services/session-result.service";
import {SpecialityService} from "@services/speciality.service";
import {StudentService} from "@services/student.service";
import {StudyPlanService} from "@services/study-plan.service";
import {SubjectService} from "@services/subject.service";
import {TutorService} from "@services/tutor.service";

@NgModule({
	imports: [
		HttpClientModule
	],
	providers: [
		DepartmentService,
		GroupService,
		MarkService,
		RoomService,
		ScheduleService,
		SessionResultService,
		SpecialityService,
		StudentService,
		StudyPlanService,
		SubjectService,
		TutorService
	]
})
export class ServicesModule {}