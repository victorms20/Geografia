using Geografia.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PagedList;

namespace Geografia.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext dBContext = new ApplicationDbContext();

        public HomeController() { }

        public ViewResult Index(string sortOrder, string currentFilter, string searchString, int? page)
        {
            ViewBag.CurrentSort = sortOrder;
            ViewBag.NameSortParm = String.IsNullOrEmpty(sortOrder) ? "name_desc" : "";
            ViewBag.DateSortParm = sortOrder == "Date" ? "date_desc" : "Date";

            if (searchString != null)
            {
                page = 1;
            }
            else
            {
                searchString = currentFilter;
            }

            ViewBag.CurrentFilter = searchString;

            var students = from s in dBContext.ActivitatsAlumne
                           select s;
            if (!String.IsNullOrEmpty(searchString))
            {
                students = students.Where(s => s.NickAlumne.Contains(searchString)
                                       || s.NomActivitat.Contains(searchString));
            }
            switch (sortOrder)
            {
                case "name_desc":
                    students = students.OrderByDescending(s => s.NickAlumne);
                    break;
                case "Date":
                    students = students.OrderBy(s => s.Data);
                    break;
                default:  // Name ascending 
                    students = students.OrderBy(s => s.NickAlumne);
                    break;
            }

            int pageSize = 5;
            int pageNumber = (page ?? 1);
            return View(students.ToPagedList(pageNumber, pageSize));
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

        public ActionResult Resultats() => View(dBContext.ActivitatsAlumne.OrderByDescending(x => x.Nota));

        public ActionResult Act1_ClickComarca()
        {
            return View(new ActivitatAlumne());
        }

        public ActionResult Activitat2() => View();

        public ActionResult Activitat3() => View();

        //POST per inserir la informació de la persona a l'activitat i redirigir a Resultats
        [HttpPost]
        public ActionResult CreateNick([Bind(Include = "NickAlumne,NomActivitat,Nota,Data")] ActivitatAlumne activitatAlumne)
        {

            activitatAlumne.Id = Guid.NewGuid();

            dBContext.ActivitatsAlumne.Add(activitatAlumne);
            dBContext.SaveChanges();            

            return RedirectToAction("Resultats");
        }

    }
}