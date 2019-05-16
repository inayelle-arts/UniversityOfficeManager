using Microsoft.AspNetCore.Mvc;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;
using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Controllers
{
	[Route("api/tutors")]
	public sealed class TutorController : CrudControllerBase<Tutor>
	{
		public TutorController(IRepository<Tutor> repository) : base(repository)
		{
		}
	}
}