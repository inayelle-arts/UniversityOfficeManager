using Microsoft.AspNetCore.Mvc;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;
using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Controllers
{
	[Route("api/session-results")]
	public sealed class SessionResultController : CrudControllerBase<SessionResult>
	{
		public SessionResultController(IRepository<SessionResult> repository) : base(repository)
		{
		}
	}
}