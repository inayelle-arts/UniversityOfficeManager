using System;
using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Entities
{
	public sealed class Mark: IEntity
	{
		public int      Id        { get; set; }
		public string   Comment   { get; set; }
		public DateTime CreatedAt { get; set; }

		public int     SubjectId { get; set; }
		public Subject Subject   { get; set; }

		public int   TutorId { get; set; }
		public Tutor Tutor   { get; set; }

		public int     StudentId { get; set; }
		public Student Student   { get; set; }
	}
}