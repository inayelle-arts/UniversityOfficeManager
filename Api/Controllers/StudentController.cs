using Microsoft.AspNetCore.Mvc;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;
using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Controllers
{
	[Route("api/students")]
	public sealed class StudentController: CrudControllerBase<Student>
	{
		public StudentController(IRepository<Student> repository) : base(repository)
		{
		}
	}
}