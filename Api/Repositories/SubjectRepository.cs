using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;

namespace UniversityOffice.Api.Repositories
{
	internal sealed class SubjectRepository : RepositoryBase<Subject>
	{
		public SubjectRepository(UniversityDbContext context) : base(context)
		{
		}
	}
}