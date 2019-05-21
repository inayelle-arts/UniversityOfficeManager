import {Component, EventEmitter, Input, Output, Type} from '@angular/core';
import {Observable} from "rxjs";
import {IEntity} from "@interfaces/entity.interface";

@Component({
	selector: 'app-table-view',
	templateUrl: './table-view.component.html',
	styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent
{
	@Input('columns')
	private readonly _columns: string[];
	
	@Input()
	public dataSource: IEntity[];
	
	@Output('onDelete')
	public readonly onDelete: EventEmitter<IEntity> = new EventEmitter<IEntity>();
	
	@Output('onUpdate')
	public readonly onUpdate: EventEmitter<IEntity> = new EventEmitter<IEntity>();
	
	@Output('onCreate')
	public readonly onCreate: EventEmitter<void> = new EventEmitter<void>();
	
	public get columns(): string[]
	{
		return [...this._columns, 'actions'];
	}
	
	public delete(element: IEntity): void
	{
		this.onDelete.emit(element);
	}
	
	public update(element: IEntity): void
	{
		this.onUpdate.emit(element);
	}
	
	public create(): void
	{
		this.onCreate.emit();
	}
	
	public get(element: IEntity, property: string): any
	{
		return eval(`element.${property}`);
	}
}
