using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;

namespace UniversityOffice.Api.Repositories
{
	internal sealed class TutorRepository : RepositoryBase<Tutor>
	{
		public TutorRepository(UniversityDbContext context) : base(context)
		{
		}

		public override async Task<ICollection<Tutor>> GetAllAsync()
		{
			return await Context.Set<Tutor>()
			                    .Include(m => m.Department)
			                    .ToListAsync();
		}

		public override async Task<Tutor> GetByIdAsync(int id)
		{
			return await Context.Set<Tutor>()
			                    .Include(m => m.Department)
			                    .FirstOrDefaultAsync(m => m.Id == id);
		}
	}
}