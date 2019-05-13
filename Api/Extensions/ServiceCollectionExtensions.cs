using System.Linq;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using UniversityOffice.Api.Entities;
using UniversityOffice.Api.Filters;
using UniversityOffice.Api.Interfaces;
using UniversityOffice.Api.Repositories;

namespace UniversityOffice.Api.Extensions
{
	internal static class ServiceCollectionExtensions
	{
		public static void AddApiMvc(this IServiceCollection services)
		{
			services.AddMvc(options => options.Filters.Add<ModelValidationFilter>());
		}

		public static void AddClientCors(this IServiceCollection services, IConfiguration configuration)
		{
			var policy = new CorsPolicyBuilder()
			             .WithOrigins(configuration["Cors:Client:Host"])
			             .AllowAnyHeader()
			             .AllowAnyMethod()
			             .Build();

			services.AddCors(cors => cors.AddPolicy("Client", policy));
		}

		public static void AddDataAccess(this IServiceCollection services, IConfiguration configuration)
		{
			var connectionString = configuration.GetConnectionString("UniversityOffice0");

			services.AddDbContext<UniversityDbContext>(options => options.UseNpgsql(connectionString));
		}

		public static void AddRepositories(this IServiceCollection services)
		{
			services.AddTransient<IRepository<Department>, DepartmentRepository>()
			        .AddTransient<IRepository<Group>, GroupRepository>()
			        .AddTransient<IRepository<Mark>, MarkRepository>()
			        .AddTransient<IRepository<PassportInfo>, PassportInfoRepository>()
			        .AddTransient<IRepository<Room>, RoomRepository>()
			        .AddTransient<IRepository<ScheduleItem>, ScheduleRepository>()
			        .AddTransient<IRepository<SessionResult>, SessionResultRepository>()
			        .AddTransient<IRepository<Speciality>, SpecialityRepository>()
			        .AddTransient<IRepository<Student>, StudentRepository>()
			        .AddTransient<IRepository<StudyPlan>, StudyPlanRepository>()
			        .AddTransient<IRepository<Subject>, SubjectRepository>()
			        .AddTransient<IRepository<Tutor>, TutorRepository>();
		}
	}
}