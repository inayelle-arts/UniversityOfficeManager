using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;

namespace UniversityOffice.Api.Repositories
{
	internal sealed class GroupRepository : RepositoryBase<Group>
	{
		public GroupRepository(UniversityDbContext context) : base(context)
		{
		}

		public override async Task<ICollection<Group>> GetAllAsync()
		{
			return await Context.Set<Group>()
			                    .Include(g => g.Department)
			                    .Include(g => g.Speciality)
			                    .ToListAsync();
		}

		public override async Task<Group> GetByIdAsync(int id)
		{
			return await Context.Set<Group>()
			                    .Include(g => g.Department)
			                    .Include(g => g.Speciality)
			                    .FirstOrDefaultAsync(g => g.Id == id);
		}
	}
}