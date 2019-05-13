using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Entities
{
	public sealed class ScheduleItem: IEntity
	{
		public int       Id          { get; set; }
		public DayOfWeek Day         { get; set; }
		public Week      Week        { get; set; }
		public short     OrderNumber { get; set; }

		public int     SubjectId { get; set; }
		public Subject Subject   { get; set; }

		public int   GroupId { get; set; }
		public Group Group   { get; set; }

		public int   TutorId { get; set; }
		public Tutor Tutor   { get; set; }

		public int  RoomId { get; set; }
		public Room Room   { get; set; }
	}
}