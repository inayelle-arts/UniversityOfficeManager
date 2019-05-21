import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TableViewComponent } from './components/table-view/table-view.component';
import {MaterialModule} from "@modules/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
	declarations: [TableViewComponent],
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
