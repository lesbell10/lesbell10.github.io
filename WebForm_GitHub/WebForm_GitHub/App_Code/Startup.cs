using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebForm_GitHub.Startup))]
namespace WebForm_GitHub
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
