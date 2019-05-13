using System.Collections.Generic;
using System.Threading.Tasks;

namespace UniversityOffice.Api.Interfaces
{
	public interface IRepository<TEntity> where TEntity : class, IEntity
	{
		Task<ICollection<TEntity>> GetAllAsync();

		Task<TEntity> GetByIdAsync(int id);

		Task<TEntity> CreateAsync(TEntity entity);
		Task<TEntity> UpdateAsync(TEntity entity);

		Task<TEntity> DeleteAsync(int id);
	}
}