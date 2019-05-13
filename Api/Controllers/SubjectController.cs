using Microsoft.AspNetCore.Mvc;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;
using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Controllers
{
	[Route("api/subjects")]
	internal sealed class SubjectController: CrudControllerBase<Subject>
	{
		public SubjectController(IRepository<Subject> repository) : base(repository)
		{
		}
	}
}