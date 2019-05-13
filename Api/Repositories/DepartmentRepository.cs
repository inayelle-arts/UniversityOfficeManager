using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;

namespace UniversityOffice.Api.Repositories
{
	internal sealed class DepartmentRepository : RepositoryBase<Department>
	{
		public DepartmentRepository(UniversityDbContext context) : base(context)
		{
		}
	}
}