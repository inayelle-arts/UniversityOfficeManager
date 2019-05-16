import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RootComponent} from './components/root/root.component';
import {AppRouting} from "@modules/app/app.routing";
import {MaterialModule} from "@modules/material/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LayoutModule} from "@modules/layout/layout.module";
import {NotFoundComponent} from './components/not-found/not-found.component';
import {DataViewsModule} from "@modules/data-views/data-views.module";

@NgModule({
	declarations: [
		RootComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		LayoutModule,
		MaterialModule,
		DataViewsModule,
		AppRouting,
	],
	providers: [],
	bootstrap: [RootComponent]
})
export class AppModule {}
