import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TableViewComponent } from './components/table-view/table-view.component';
import {MaterialModule} from "@modules/material/material.module";
import { EditFormComponent } from './components/edit-form/edit-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
	declarations: [TableViewComponent, EditFormComponent],
	imports: [
		CommonModule,
		MaterialModule,
		ReactiveFormsModule,
		FormsModule
	],
	exports: [
		TableViewComponent
	]
})
export class CrudModule {}
