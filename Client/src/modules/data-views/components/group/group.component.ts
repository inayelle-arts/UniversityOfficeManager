import {Component, OnInit} from '@angular/core';
import {ViewComponentBase} from "@base/view-component/view-component.base";
import {Room} from "@entities/room.entity";
import {RoomService} from "@services/room.service";
import {Group} from "@entities/group.entity";
import {GroupService} from "@services/group.service";
import {MatBottomSheet} from "@angular/material";

@Component({
	templateUrl: '../../../../base/view-component/view-component.base.html'
})
export class GroupComponent extends ViewComponentBase<Group>
{
	readonly columns: string[] = ['id', 'name', 'speciality.name', 'speciality.code', 'department.abbreviation'];
	
	constructor(formContainer: MatBottomSheet, service: GroupService)
	{
		super(formContainer, service);
	}
}
