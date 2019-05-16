import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoomComponent} from "@modules/data-views/components/room/room.component";
import {PathMatch} from "@enums/path-match.enum";
import {SubjectComponent} from "@modules/data-views/components/subject/subject.component";
import {SpecialityComponent} from "@modules/data-views/components/speciality/speciality.component";
import {TutorComponent} from "@modules/data-views/components/tutor/tutor.component";
import {DepartmentComponent} from "@modules/data-views/components/department/department.component";
import {GroupComponent} from "@modules/data-views/components/group/group.component";
import {MarkComponent} from "@modules/data-views/components/mark/mark.component";
import {ScheduleComponent} from "@modules/data-views/components/schedule/schedule.component";
import {SessionResultComponent} from "@modules/data-views/components/session-result/session-result.component";
import {StudentComponent} from "@modules/data-views/components/student/student.component";
import {StudyPlanComponent} from "@modules/data-views/components/study-plan/study-plan.component";

const routes: Routes =
	[
		{
			path: 'data/rooms',
			component: RoomComponent,
			pathMatch: PathMatch.Full
		},
		{
			path: 'data/subjects',
			component: SubjectComponent,
			pathMatch: PathMatch.Full
		},
		{
			path: 'data/specialities',
			component: SpecialityComponent,
			pathMatch: PathMatch.Full
		},
		{
			path: 'data/tutors',
			component: TutorComponent,
			pathMatch: PathMatch.Full
		},
		{
			path: 'data/departments',
			component: DepartmentComponent,
			pathMatch: PathMatch.Full
		},
		{
			path: 'data/groups',
			component: GroupComponent,
			pathMatch: PathMatch.Full
		},
		{
			path: 'data/marks',
			component: MarkComponent,
			pathMatch: PathMatch.Full
		},
		{
			path: 'data/schedule',
			component: ScheduleComponent,
			pathMatch: PathMatch.Full
		},
		{
			path: 'data/session-results',
			component: SessionResultComponent,
			pathMatch: PathMatch.Full
		},
		{
			path: 'data/students',
			component: StudentComponent,
			pathMatch: PathMatch.Full
		},
		{
			path: 'data/study-plans',
			component: StudyPlanComponent,
			pathMatch: PathMatch.Full
		},
	];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DataViewsRouting {}
