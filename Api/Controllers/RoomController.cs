using Microsoft.AspNetCore.Mvc;
using UniversityOffice.Api.Base;
using UniversityOffice.Api.Entities;
using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Controllers
{
	[Route("api/rooms")]
	public sealed class RoomController: CrudControllerBase<Room>
	{
		public RoomController(IRepository<Room> repository) : base(repository)
		{
		}
	}
}