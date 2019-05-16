import {Component, OnInit} from '@angular/core';
import {ViewComponentBase} from "@base/view-component/view-component.base";
import {Subject} from "@entities/subject.entity";
import {SubjectService} from "@services/subject.service";
import {MatBottomSheet} from "@angular/material";

@Component({
	templateUrl: '../../../../base/view-component/view-component.base.html'
})
export class SubjectComponent extends ViewComponentBase<Subject>
{
	readonly columns: string[] = ['id', 'name'];
	
	constructor(formContainer: MatBottomSheet, service: SubjectService)
	{
		super(formContainer, service);
	}
}
