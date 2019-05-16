import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "@modules/material/material.module";
import {LinkButtonComponent} from './components/link-button/link-button.component';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from './components/header/header.component';
import {CrudModule} from "@modules/crud/crud.module";

@NgModule({
	declarations: [
		LinkButtonComponent,
		HeaderComponent
	],
	exports: [
		HeaderComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		CrudModule,
		RouterModule
	]
})
export class LayoutModule {}
