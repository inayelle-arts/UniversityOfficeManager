using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Entities
{
	public sealed class Speciality: IEntity
	{
		public int    Id   { get; set; }
		public string Name { get; set; }
		public short  Code { get; set; }
	}
}