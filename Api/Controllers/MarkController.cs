using Microsoft.AspNetCore.Mvc;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;
using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Controllers
{
	[Route("api/marks")]
	public sealed class MarkController: CrudControllerBase<Mark>
	{
		public MarkController(IRepository<Mark> repository) : base(repository)
		{
		}
	}
}