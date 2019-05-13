using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Entities
{
	public sealed class Student : IEntity
	{
		public int    Id               { get; set; }
		public string RecordBookSeries { get; set; }
		public string RecordBookCode   { get; set; }

		public int          PassportInfoId { get; set; }
		public PassportInfo PassportInfo   { get; set; }

		public int   GroupId { get; set; }
		public Group Group   { get; set; }
	}
}