using System;

namespace UniversityOffice.Api.Entities
{
	public abstract class Person
	{
		public string   FirstName  { get; set; }
		public string   MiddleName { get; set; }
		public string   LastName   { get; set; }
		public string   Series     { get; set; }
		public string   Code       { get; set; }
		public DateTime Birthday   { get; set; }
		public Gender   Gender     { get; set; }
	}
}