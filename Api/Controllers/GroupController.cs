using Microsoft.AspNetCore.Mvc;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;
using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Controllers
{
	[Route("api/groups")]
	public sealed class GroupController : CrudControllerBase<Group>
	{
		public GroupController(IRepository<Group> repository) : base(repository)
		{
		}
	}
}