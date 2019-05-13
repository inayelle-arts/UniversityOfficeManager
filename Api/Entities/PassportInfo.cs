using System;
using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Entities
{
	public sealed class PassportInfo : IEntity
	{
		public int      Id         { get; set; }
		public string   FirstName  { get; set; }
		public string   MiddleName { get; set; }
		public string   LastName   { get; set; }
		public string   Series     { get; set; }
		public string   Code       { get; set; }
		public DateTime Birthday   { get; set; }
		public Gender   Gender     { get; set; }
	}
}