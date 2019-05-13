using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;

namespace UniversityOffice.Api.Repositories
{
	internal sealed class SessionResultRepository : RepositoryBase<SessionResult>
	{
		public SessionResultRepository(UniversityDbContext context) : base(context)
		{
		}

		public override async Task<ICollection<SessionResult>> GetAllAsync()
		{
			return await Context.Set<SessionResult>()
			                    .Include(s => s.Tutor)
			                    .Include(s => s.Subject)
			                    .Include(s => s.Student)
			                    .ToListAsync();
		}

		public override async Task<SessionResult> GetByIdAsync(int id)
		{
			return await Context.Set<SessionResult>()
			                    .Include(s => s.Tutor)
			                    .Include(s => s.Subject)
			                    .Include(s => s.Student)
			                    .FirstOrDefaultAsync(s => s.Id == id);
		}
	}
}