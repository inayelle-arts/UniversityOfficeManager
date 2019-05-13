using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace UniversityOffice.Api.Extensions
{
	internal static class HostingEnvironmentExtensions
	{
		public static IConfiguration GetConfiguration(this IHostingEnvironment environment)
		{
			var configDir = Path.Combine(environment.ContentRootPath, "Configurations");

			return new ConfigurationBuilder().SetBasePath(configDir)
			                                 .AddJsonFile("app.json")
			                                 .Build();
		}
	}
}