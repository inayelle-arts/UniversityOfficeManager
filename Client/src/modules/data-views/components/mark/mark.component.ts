import {Component, OnInit} from '@angular/core';
import {ViewComponentBase} from "@base/view-component/view-component.base";
import {Room} from "@entities/room.entity";
import {RoomService} from "@services/room.service";
import {Mark} from "@entities/mark.entity";
import {MarkService} from "@services/mark.service";
import {MatBottomSheet} from "@angular/material";
import {HttpServiceBase} from "@base/http-service.base";

@Component({
	templateUrl: '../../../../base/view-component/view-component.base.html'
})
export class MarkComponent extends ViewComponentBase<Mark>
{
	constructor(formContainer: MatBottomSheet, service: MarkService)
	{
		super(formContainer, service);
	}
	
	readonly columns: string[] = ['id', 'student.firstName', 'student.lastName', 'tutor.lastName', 'subject.name'];
}
