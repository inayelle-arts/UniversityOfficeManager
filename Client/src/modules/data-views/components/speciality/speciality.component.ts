import {Component} from '@angular/core';
import {ViewComponentBase} from "@base/view-component/view-component.base";
import {Speciality} from "@entities/speciality.entity";
import {SpecialityService} from "@services/speciality.service";
import {MatBottomSheet} from "@angular/material";

@Component({
	templateUrl: '../../../../base/view-component/view-component.base.html'
})
export class SpecialityComponent extends ViewComponentBase<Speciality>
{
	readonly columns: string[] = ['id', 'code', 'name'];
	
	constructor(formContainer: MatBottomSheet, service: SpecialityService)
	{
		super(formContainer, service);
	}
}
