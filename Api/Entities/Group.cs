using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Entities
{
	public sealed class Group: IEntity
	{
		public int    Id   { get; set; }
		public string Name { get; set; }

		public int        SpecialityId { get; set; }
		public Speciality Speciality   { get; set; }

		public int        DepartmentId { get; set; }
		public Department Department   { get; set; }
	}
}