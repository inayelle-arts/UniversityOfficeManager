using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Entities
{
	public sealed class Subject: IEntity
	{
		public int    Id   { get; set; }
		public string Name { get; set; }
	}
}