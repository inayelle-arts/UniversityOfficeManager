using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Entities
{
	public sealed class Department : IEntity
	{
		public int    Id           { get; set; }
		public string FullName     { get; set; }
		public string Abbreviation { get; set; }
	}
}