using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;

namespace UniversityOffice.Api.Repositories
{
	internal sealed class StudentRepository : RepositoryBase<Student>
	{
		public StudentRepository(UniversityDbContext context) : base(context)
		{
		}

		public override async Task<ICollection<Student>> GetAllAsync()
		{
			return await Context.Set<Student>()
			                    .Include(s => s.Group)
			                    .Include(s => s.PassportInfo)
			                    .ToListAsync();
		}

		public override async Task<Student> GetByIdAsync(int id)
		{
			return await Context.Set<Student>()
			                    .Include(s => s.Group)
			                    .Include(s => s.PassportInfo)
			                    .FirstOrDefaultAsync(s => s.Id == id);
		}
	}
}