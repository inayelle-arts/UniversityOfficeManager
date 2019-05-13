using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Entities
{
	public sealed class StudyPlan: IEntity
	{
		public int   Id      { get; set; }
		public short Credits { get; set; }

		public int     SubjectId { get; set; }
		public Subject Subject   { get; set; }

		public int   GroupId { get; set; }
		public Group Group   { get; set; }
	}
}