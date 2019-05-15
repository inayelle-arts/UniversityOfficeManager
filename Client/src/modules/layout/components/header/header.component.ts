import {Component} from '@angular/core';
import {EntityLink} from "@modules/layout/classes/entity-link";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent
{
	public readonly entityLinks: EntityLink[] =
		[
			{
				label:'Label1',
				link:'link1'
			},
			{
				label:'Label1',
				link:'link1'
			},
			{
				label:'Label1',
				link:'link1'
			}
		];
}