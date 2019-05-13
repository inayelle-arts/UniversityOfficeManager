using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Entities
{
	public sealed class Tutor : IEntity
	{
		public int    Id             { get; set; }
		public string AcademicDegree { get; set; }

		public int          PassportInfoId { get; set; }
		public PassportInfo PassportInfo   { get; set; }

		public int        DepartmentId { get; set; }
		public Department Department   { get; set; }
	}
}