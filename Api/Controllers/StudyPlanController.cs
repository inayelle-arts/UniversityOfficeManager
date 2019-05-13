using Microsoft.AspNetCore.Mvc;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;
using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Controllers
{
	[Route("api/study-plans")]
	public sealed class StudyPlanController : CrudControllerBase<StudyPlan>
	{
		public StudyPlanController(IRepository<StudyPlan> repository) : base(repository)
		{
		}
	}
}