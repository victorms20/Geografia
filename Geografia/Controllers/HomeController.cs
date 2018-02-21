using Geografia.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Geografia.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext dBContext = new ApplicationDbContext();

        public HomeController() { }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult MapaCatalunya() => View();

        public ActionResult Resultats() => View();

        public ActionResult Act1_ClickComarca()
        {
            return View(new ActivitatAlumne());
        }

        public ActionResult Activitat2() => View();

        [HttpPost]
        public ActionResult CreateNick(string nick)
        {
            var nombre = nick;
            ActivitatAlumne alumne = new ActivitatAlumne
            {
                NickAlumne = nick,
                NomActivitat = "Activitat 1",
                Data = DateTime.Now,
                Nota = 5
            };
            dBContext.ActivitatsAlumne.Add(alumne);
            dBContext.SaveChanges();
            return View("Resultats");
        }
    }
}