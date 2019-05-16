import {Component, Input, OnInit} from '@angular/core';
import {EditForm} from "@base/view-component/edit.form";

@Component({
	selector: 'app-edit-form',
	templateUrl: './edit-form.component.html',
	styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent
{
	@Input()
	public readonly columns: string[];
	
	@Input()
	public readonly form: EditForm<any>;
}
