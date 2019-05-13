using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using UniversityOffice.Api.Extensions;

namespace UniversityOffice.Api
{
	public class Startup : StartupBase
	{
		public IConfiguration      Configuration { get; }
		public IHostingEnvironment Environment   { get; }

		public Startup(IHostingEnvironment environment)
		{
			Environment   = environment;
			Configuration = environment.GetConfiguration();
		}

		public override void ConfigureServices(IServiceCollection services)
		{
			services.AddDataAccess(Configuration);
			services.AddRepositories();
			services.AddClientCors(Configuration);
			services.AddApiMvc();
		}

		public override void Configure(IApplicationBuilder app)
		{
			app.UseClientCors();
			app.UseMvc();
		}
	}
}