using Microsoft.AspNetCore.Builder;

namespace UniversityOffice.Api.Extensions
{
	internal static class ApplicationBuilderExtensions
	{
		public static void UseClientCors(this IApplicationBuilder app)
		{
			app.UseCors("Client");
		}
	}
}