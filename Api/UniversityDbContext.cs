using Microsoft.EntityFrameworkCore;
using UniversityOffice.Api.Entities;

namespace UniversityOffice.Api
{
	internal sealed class UniversityDbContext : DbContext
	{
		public UniversityDbContext(DbContextOptions options) : base(options)
		{
		}

		public DbSet<Department>    Departments    { get; set; }
		public DbSet<Group>         Groups         { get; set; }
		public DbSet<Mark>          Marks          { get; set; }
		public DbSet<Room>          Rooms          { get; set; }
		public DbSet<ScheduleItem>  Schedule       { get; set; }
		public DbSet<SessionResult> SessionResults { get; set; }
		public DbSet<Speciality>    Specialities   { get; set; }
		public DbSet<Student>       Students       { get; set; }
		public DbSet<StudyPlan>     StudyPlans     { get; set; }
		public DbSet<Subject>       Subjects       { get; set; }
		public DbSet<Tutor>         Tutors         { get; set; }
	}
}