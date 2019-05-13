using Microsoft.AspNetCore.Mvc;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;
using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Controllers
{
	[Route("api/specialities")]
	public sealed class SpecialityController : CrudControllerBase<Speciality>
	{
		public SpecialityController(IRepository<Speciality> repository) : base(repository)
		{
		}
	}
}