using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;

namespace UniversityOffice.Api.Repositories
{
	internal sealed class RoomRepository : RepositoryBase<Room>
	{
		public RoomRepository(UniversityDbContext context) : base(context)
		{
		}
	}
}