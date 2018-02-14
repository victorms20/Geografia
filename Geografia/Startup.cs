using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Geografia.Startup))]
namespace Geografia
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
