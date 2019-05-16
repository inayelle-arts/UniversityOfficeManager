import {Component, OnInit} from '@angular/core';
import {ViewComponentBase} from "@base/view-component/view-component.base";
import {StudyPlan} from "@entities/study-plan.entity";
import {StudyPlanService} from "@services/study-plan.service";
import {MatBottomSheet} from "@angular/material";

@Component({
	templateUrl: '../../../../base/view-component/view-component.base.html'
})
export class StudyPlanComponent extends ViewComponentBase<StudyPlan>
{
	readonly columns: string[] = ['id', 'group.name', 'subject.name', 'credits'];
	
	constructor(formContainer: MatBottomSheet, service: StudyPlanService)
	{
		super(formContainer, service);
	}
}
