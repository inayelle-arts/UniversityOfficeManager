import {Component} from '@angular/core';
import {ViewComponentBase} from "@base/view-component/view-component.base";
import {ScheduleItem} from "@entities/schedule-item.entity";
import {ScheduleService} from "@services/schedule.service";
import {MatBottomSheet} from "@angular/material";

@Component({
	templateUrl: '../../../../base/view-component/view-component.base.html'
})
export class ScheduleComponent extends ViewComponentBase<ScheduleItem>
{
	constructor(formContainer: MatBottomSheet, service: ScheduleService)
	{
		super(formContainer, service);
	}
	
	readonly columns: string[] = ['id', 'day', 'week', 'orderNumber', 'subject.name', 'group.name'];
}

