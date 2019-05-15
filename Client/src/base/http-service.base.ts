import {Injectable} from "@angular/core";
import {IEntity} from "@interfaces/entity.interface";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export abstract class HttpServiceBase<TEntity extends IEntity>
{
	protected abstract readonly baseUrl : string;
	
	protected readonly http: HttpClient;
	
	public constructor(http: HttpClient)
	{
		this.http = http;
	}
	
	public getById(id: number): Observable<TEntity>
	{
		return this.http.get<TEntity>(HttpServiceBase.combineUrl(this.baseUrl, id));
	}
	
	public getAll(): Observable<TEntity[]>
	{
		return this.http.get<TEntity[]>(this.baseUrl);
	}
	
	public create(entity: TEntity): Observable<TEntity>
	{
		return this.http.post<TEntity>(this.baseUrl, entity);
	}
	
	public update(entity: TEntity): Observable<TEntity>
	{
		return this.http.patch<TEntity>(HttpServiceBase.combineUrl(this.baseUrl, entity.Id), entity);
	}
	
	public delete(entity: TEntity): Observable<TEntity>
	{
		return this.http.delete<TEntity>(HttpServiceBase.combineUrl(this.baseUrl, entity.Id));
	}
	
	protected static combineUrl(...args: any[]): string
	{
		return args.join('/');
	}
}