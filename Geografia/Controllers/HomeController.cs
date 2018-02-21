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

        public ActionResult Act1_ClickComarca() => View();

        public ActionResult Activitat2() => View();

        [HttpPost]
        public ActionResult CreateNick(string nick)
        {
            
        }
    }
}