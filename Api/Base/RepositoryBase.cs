using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Base
{
	internal abstract class RepositoryBase<TEntity> : IRepository<TEntity> where TEntity : class, IEntity
	{
		private readonly DbSet<TEntity> _dbSet;

		protected UniversityDbContext Context { get; }

		protected RepositoryBase(UniversityDbContext context)
		{
			Context = context;
			_dbSet       = context.Set<TEntity>();
		}

		public virtual async Task<ICollection<TEntity>> GetAllAsync()
		{
			return await _dbSet.ToListAsync();
		}

		public virtual async Task<TEntity> GetByIdAsync(int id)
		{
			return await _dbSet.FirstOrDefaultAsync(e => e.Id == id);
		}

		public async Task<TEntity> CreateAsync(TEntity entity)
		{
			try
			{
				await _dbSet.AddAsync(entity);
				await Context.SaveChangesAsync();
				return entity;
			}
			catch
			{
				return null;
			}
		}

		public async Task<TEntity> UpdateAsync(TEntity entity)
		{
			try
			{
				_dbSet.Update(entity);
				await Context.SaveChangesAsync();
				return entity;
			}
			catch
			{
				return null;
			}
		}

		public async Task<TEntity> DeleteAsync(int id)
		{
			var entity = await GetByIdAsync(id);

			if (entity == null)
			{
				return null;
			}

			_dbSet.Remove(entity);
			await Context.SaveChangesAsync();

			return entity;
		}
	}
}