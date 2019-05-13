using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;

namespace UniversityOffice.Api.Repositories
{
	internal sealed class MarkRepository : RepositoryBase<Mark>
	{
		public MarkRepository(UniversityDbContext context) : base(context)
		{
		}

		public override async Task<ICollection<Mark>> GetAllAsync()
		{
			return await Context.Set<Mark>()
			                    .Include(m => m.Student)
			                    .Include(m => m.Tutor)
			                    .Include(m => m.Subject)
			                    .ToListAsync();
		}

		public override async Task<Mark> GetByIdAsync(int id)
		{
			return await Context.Set<Mark>()
			                    .Include(m => m.Student)
			                    .Include(m => m.Tutor)
			                    .Include(m => m.Subject)
			                    .FirstOrDefaultAsync(m => m.Id == id);
		}
	}
}