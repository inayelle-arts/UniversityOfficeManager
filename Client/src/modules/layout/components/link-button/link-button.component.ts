import {Component, Input} from '@angular/core';
import {EntityLink} from "@modules/layout/classes/entity-link";
@Component({
	selector: 'app-link-button',
	templateUrl: './link-button.component.html',
	styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent
{
	@Input()
	public readonly entityLink: EntityLink;
}
