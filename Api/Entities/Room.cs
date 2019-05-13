using UniversityOffice.Api.Interfaces;

namespace UniversityOffice.Api.Entities
{
	public sealed class Room: IEntity
	{
		public int      Id       { get; set; }
		public string   Code     { get; set; }
		public short    Capacity { get; set; }
		public RoomType Type     { get; set; }
	}
}