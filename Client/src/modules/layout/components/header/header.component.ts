import {Component} from '@angular/core';
import {EntityLink} from "@modules/layout/classes/entity-link";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent
{
	public readonly entityLinks: EntityLink[] =
		[
			{
				label: 'Rooms',
				link: '/data/rooms'
			},
			{
				label: 'Subjects',
				link: '/data/subjects'
			},
			{
				label: 'Specialities',
				link: '/data/specialities'
			},
			{
				label: 'Tutors',
				link: '/data/tutors'
			},
			{
				label: 'Departments',
				link: '/data/departments'
			},
			{
				label: 'Groups',
				link: '/data/groups'
			},
			{
				label: 'Marks',
				link: '/data/marks'
			},
			{
				label: 'Schedule',
				link: '/data/schedule'
			},
			{
				label: 'Session results',
				link: '/data/session-results'
			},
			{
				label: 'Students',
				link: '/data/students'
			},
			{
				label: 'Study plans',
				link: '/data/study-plans'
			},
		];
}