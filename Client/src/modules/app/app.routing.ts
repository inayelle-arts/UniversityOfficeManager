import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from "@modules/app/components/not-found/not-found.component";
import {DataViewsModule} from "@modules/data-views/data-views.module";

const routes: Routes =
	[
		{
			path: 'data',
			loadChildren: () => DataViewsModule
		},
		{
			path: '**',
			component: NotFoundComponent
		}
	];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRouting {}
