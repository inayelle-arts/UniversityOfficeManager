using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;

namespace UniversityOffice.Api.Repositories
{
	internal sealed class ScheduleRepository : RepositoryBase<ScheduleItem>
	{
		public ScheduleRepository(UniversityDbContext context) : base(context)
		{
		}

		public override async Task<ICollection<ScheduleItem>> GetAllAsync()
		{
			return await Context.Set<ScheduleItem>()
			                    .Include(m => m.Group)
			                    .Include(m => m.Tutor)
			                    .Include(m => m.Subject)
			                    .Include(m => m.Room)
			                    .ToListAsync();
		}

		public override async Task<ScheduleItem> GetByIdAsync(int id)
		{
			return await Context.Set<ScheduleItem>()
			                    .Include(m => m.Group)
			                    .Include(m => m.Tutor)
			                    .Include(m => m.Subject)
			                    .Include(m => m.Room)
			                    .FirstOrDefaultAsync(m => m.Id == id);
		}
	}
}