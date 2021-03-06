using Microsoft.AspNetCore.Mvc;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;
using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Controllers
{
	[Route("api/departments")]
	public sealed class DepartmentController : CrudControllerBase<Department>
	{
		public DepartmentController(IRepository<Department> repository) : base(repository)
		{
		}
	}
}