import {HttpServiceBase} from "@base/http-service.base";
import {IEntity} from "@interfaces/entity.interface";
import {Inject, OnInit, TemplateRef, ViewChild} from "@angular/core";
import {MatBottomSheet} from "@angular/material";
import {FormBase} from "@base/form.base";
import {EditForm} from "@base/view-component/edit.form";

export abstract class ViewComponentBase<TEntity extends IEntity> implements OnInit
{
	@ViewChild('editForm')
	public editTemplate: TemplateRef<any>;
	
	private readonly _formContainer: MatBottomSheet;
	
	private _form: EditForm<TEntity>;
	
	protected readonly service: HttpServiceBase<TEntity>;
	
	public abstract readonly columns: string[];
	
	public elements: TEntity[];
	
	public editElement: TEntity;
	
	protected constructor(formContainer: MatBottomSheet, service: HttpServiceBase<TEntity>)
	{
		this._formContainer = formContainer;
		
		this.service = service;
	}
	
	protected get form(): FormBase<TEntity>
	{
		return this._form;
	}
	
	public async ngOnInit(): Promise<void>
	{
		this.elements = await this.service.getAll().toPromise();
		
		this._form = new EditForm<TEntity>(this.columns);
	}
	
	public async delete(element: TEntity): Promise<void>
	{
		const deleted = await this.service.delete(element).toPromise();
		
		this.elements = this.elements.filter(x => x.id != deleted.id);
	}
	
	public edit(element: TEntity): void
	{
		this.editElement = element;
		this._formContainer.open(this.editTemplate);
	}
	
	public async onSubmitEdit(): Promise<void>
	{
		console.log(this.form.value);
		
		this.editElement = await this.service.update(this.form.value).toPromise();
		
		window.location.reload();
	}
}