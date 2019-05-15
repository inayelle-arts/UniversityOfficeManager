import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from "@modules/app/components/not-found/not-found.component";

const routes: Routes =
	[
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
