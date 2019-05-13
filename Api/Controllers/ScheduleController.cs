using Microsoft.AspNetCore.Mvc;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;
using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Controllers
{
	[Route("api/schedule")]
	public sealed class ScheduleController: CrudControllerBase<ScheduleItem>
	{
		public ScheduleController(IRepository<ScheduleItem> repository) : base(repository)
		{
		}
	}
}