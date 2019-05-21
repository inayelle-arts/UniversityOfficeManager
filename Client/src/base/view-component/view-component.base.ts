import {HttpServiceBase} from "@base/http-service.base";
import {IEntity} from "@interfaces/entity.interface";
import {OnInit, TemplateRef, ViewChild} from "@angular/core";
import {MatBottomSheet} from "@angular/material";
import {FormBase} from "@base/form.base";
import {EditForm} from "@base/view-component/edit.form";

export abstract class ViewComponentBase<TEntity extends IEntity> implements OnInit
{
	@ViewChild('editFormTemplate')
	public editTemplate: TemplateRef<any>;
	
	@ViewChild('createFormTemplate')
	public createTemplate: TemplateRef<any>;
	
	private readonly _formContainer: MatBottomSheet;
	
	private _editForm: EditForm<TEntity>;
	private _createForm: EditForm<TEntity>;
	
	protected readonly service: HttpServiceBase<TEntity>;
	
	public abstract readonly columns: string[];
	
	public elements: TEntity[];
	
	public editElement: TEntity;
	
	protected constructor(formContainer: MatBottomSheet, service: HttpServiceBase<TEntity>)
	{
		this._formContainer = formContainer;
		
		this.service = service;
	}
	
	protected get editForm(): FormBase<TEntity>
	{
		return this._editForm;
	}
	
	protected get createForm(): FormBase<TEntity>
	{
		return this._createForm;
	}
	
	public async ngOnInit(): Promise<void>
	{
		this.elements = await this.service.getAll().toPromise();
		
		this._editForm = new EditForm<TEntity>(this.columns);
		this._createForm = new EditForm<TEntity>(this.createFields);
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
	
	public create(): void
	{
		this._formContainer.open(this.createTemplate);
	}
	
	public async onSubmitEdit(): Promise<void>
	{
		console.log(this.editForm.value);
		
		this.editElement = await this.service.update(this.editForm.value).toPromise();
		
		window.location.reload();
	}
	
	public async onSubmitCreate(): Promise<void>
	{
		console.log(this.createForm.value);
		
		await this.service.create(this.createForm.value).toPromise();
		
		window.location.reload();
	}
	
	public get createFields(): string[]
	{
		return this.columns.filter(c => c != 'id');
	}
}