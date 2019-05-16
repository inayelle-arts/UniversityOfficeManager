import {FormBase} from "@base/form.base";
import {IEntity} from "@interfaces/entity.interface";
import {AbstractControl, FormControl} from "@angular/forms";

export class EditForm<TEntity extends IEntity> extends FormBase<TEntity>
{
	constructor(columns: string[])
	{
		const controls: { [key: string]: AbstractControl; } = {};
		
		columns.forEach(x => controls[x] = new FormControl());
		
		super(controls);
	}
}