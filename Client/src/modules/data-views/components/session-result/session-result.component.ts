import {Component, OnInit} from '@angular/core';
import {ViewComponentBase} from "@base/view-component/view-component.base";
import {Room} from "@entities/room.entity";
import {RoomService} from "@services/room.service";
import {SessionResult} from "@entities/session-result.entity";
import {SessionResultService} from "@services/session-result.service";
import {MatBottomSheet} from "@angular/material";

@Component({
	templateUrl: '../../../../base/view-component/view-component.base.html'
})
export class SessionResultComponent extends ViewComponentBase<SessionResult>
{
	readonly columns: string[] = ['id', 'student.lastName', 'mark', 'subject.name', 'tutor.lastName'];
	
	constructor(formContainer: MatBottomSheet, service: SessionResultService)
	{
		super(formContainer, service);
	}
}
