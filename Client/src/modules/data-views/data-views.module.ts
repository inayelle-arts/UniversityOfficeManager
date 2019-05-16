import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RoomComponent} from "@modules/data-views/components/room/room.component";
import {DataViewsRouting} from "@modules/data-views/data-views.routing";
import {MaterialModule} from "@modules/material/material.module";
import {CrudModule} from "@modules/crud/crud.module";
import {ServicesModule} from "@services/services.module";
import {SubjectComponent} from './components/subject/subject.component';
import {SpecialityComponent} from './components/speciality/speciality.component';
import {TutorComponent} from './components/tutor/tutor.component';
import {DepartmentComponent} from './components/department/department.component';
import {GroupComponent} from './components/group/group.component';
import {MarkComponent} from './components/mark/mark.component';
import {ScheduleComponent} from './components/schedule/schedule.component';
import {SessionResultComponent} from './components/session-result/session-result.component';
import {StudentComponent} from './components/student/student.component';
import {StudyPlanComponent} from './components/study-plan/study-plan.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
	declarations: [RoomComponent, SubjectComponent, SpecialityComponent, TutorComponent, DepartmentComponent, GroupComponent, MarkComponent, ScheduleComponent, SessionResultComponent, StudentComponent, StudyPlanComponent],
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		CrudModule,
		ServicesModule,
		DataViewsRouting,
		ReactiveFormsModule
	]
})
export class DataViewsModule {}
