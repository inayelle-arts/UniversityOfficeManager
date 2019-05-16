import {Component} from '@angular/core';
import {Room} from "@entities/room.entity";
import {RoomService} from "@services/room.service";
import {ViewComponentBase} from "@base/view-component/view-component.base";
import {MatBottomSheet} from "@angular/material";

@Component({
	templateUrl: '../../../../base/view-component/view-component.base.html'
})
export class RoomComponent extends ViewComponentBase<Room>
{
	readonly columns: string[] = ['id', 'code', 'capacity', 'type'];
	
	constructor(formContainer: MatBottomSheet, service: RoomService)
	{
		super(formContainer, service);
	}
}
