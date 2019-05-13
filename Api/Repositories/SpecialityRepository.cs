using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;

namespace UniversityOffice.Api.Repositories
{
	internal sealed class SpecialityRepository : RepositoryBase<Speciality>
	{
		public SpecialityRepository(UniversityDbContext context) : base(context)
		{
		}
	}
}