using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;

namespace UniversityOffice.Api.Repositories
{
	internal sealed class StudyPlanRepository : RepositoryBase<StudyPlan>
	{
		public StudyPlanRepository(UniversityDbContext context) : base(context)
		{
		}

		public override async Task<ICollection<StudyPlan>> GetAllAsync()
		{
			return await Context.Set<StudyPlan>()
			                    .Include(m => m.Group)
			                    .Include(m => m.Subject)
			                    .ToListAsync();
		}

		public override async Task<StudyPlan> GetByIdAsync(int id)
		{
			return await Context.Set<StudyPlan>()
			                    .Include(m => m.Group)
			                    .Include(m => m.Subject)
			                    .FirstOrDefaultAsync(m => m.Id == id);
		}
	}
}