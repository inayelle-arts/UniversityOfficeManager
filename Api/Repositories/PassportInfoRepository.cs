using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;

namespace UniversityOffice.Api.Repositories
{
	internal sealed class PassportInfoRepository : RepositoryBase<PassportInfo>
	{
		public PassportInfoRepository(UniversityDbContext context) : base(context)
		{
		}
	}
}