import {Component, OnInit} from '@angular/core';
import {ViewComponentBase} from "@base/view-component/view-component.base";
import {Department} from "@entities/department.entity";
import {DepartmentService} from "@services/department.service";
import {MatBottomSheet} from "@angular/material";
import {FormBase} from "@base/form.base";

@Component({
	templateUrl: '../../../../base/view-component/view-component.base.html'
})
export class DepartmentComponent extends ViewComponentBase<Department>
{
	constructor(formContainer: MatBottomSheet, service: DepartmentService)
	{
		super(formContainer, service);
	}
	
	readonly columns: string[] = ['id', 'fullName', 'abbreviation'];
}
