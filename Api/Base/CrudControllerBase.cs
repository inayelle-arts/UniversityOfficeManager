using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Base
{
	public abstract class CrudControllerBase<TEntity> where TEntity : class, IEntity
	{
		private readonly IRepository<TEntity> _repository;

		protected CrudControllerBase(IRepository<TEntity> repository)
		{
			_repository = repository;
		}

		[HttpGet("{id}")]
		public async Task<TEntity> GetById(int id)
		{
			return await _repository.GetByIdAsync(id);
		}

		[HttpGet]
		public async Task<IEnumerable<TEntity>> GetAll()
		{
			return await _repository.GetAllAsync();
		}

		[HttpPost]
		public async Task<TEntity> Create([FromBody] TEntity entity)
		{
			return await _repository.CreateAsync(entity);
		}

		[HttpPatch]
		public async Task<TEntity> Update([FromBody] TEntity entity)
		{
			return await _repository.UpdateAsync(entity);
		}

		[HttpDelete("{id}")]
		public async Task<TEntity> Delete(int id)
		{
			return await _repository.DeleteAsync(id);
		}
	}
}