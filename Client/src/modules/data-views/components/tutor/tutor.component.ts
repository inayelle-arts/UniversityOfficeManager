import {Component} from '@angular/core';
import {ViewComponentBase} from "@base/view-component/view-component.base";
import {Tutor} from "@entities/tutor.entity";
import {TutorService} from "@services/tutor.service";
import {MatBottomSheet} from "@angular/material";

@Component({
	templateUrl: '../../../../base/view-component/view-component.base.html'
})
export class TutorComponent extends ViewComponentBase<Tutor>
{
	readonly columns: string[] = ['id', 'academicDegree', 'firstName', 'lastName', 'department.fullName'];
	
	constructor(formContainer: MatBottomSheet, service: TutorService)
	{
		super(formContainer, service);
	}
}
