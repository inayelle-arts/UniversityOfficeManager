import {Component, OnInit} from '@angular/core';
import {ViewComponentBase} from "@base/view-component/view-component.base";
import {Room} from "@entities/room.entity";
import {RoomService} from "@services/room.service";
import {Student} from "@entities/student.entity";
import {StudentService} from "@services/student.service";
import {MatBottomSheet} from "@angular/material";

@Component({
	templateUrl: '../../../../base/view-component/view-component.base.html'
})
export class StudentComponent extends ViewComponentBase<Student>
{
	readonly columns: string[] = ['id', 'lastName', 'firstName', 'middleName', 'birthday', 'group.name'];
	
	constructor(formContainer: MatBottomSheet, service: StudentService)
	{
		super(formContainer, service);
	}
}

