using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Geografia.Models;

namespace Geografia.Controllers
{
    public class ActivitatAlumnesController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: ActivitatAlumnes
        public ActionResult Index()
        {
            return View(db.ActivitatsAlumne.ToList());
        }

        // GET: ActivitatAlumnes/Details/5
        public ActionResult Details(float? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ActivitatAlumne activitatAlumne = db.ActivitatsAlumne.Find(id);
            if (activitatAlumne == null)
            {
                return HttpNotFound();
            }
            return View(activitatAlumne);
        }

        // GET: ActivitatAlumnes/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ActivitatAlumnes/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Nota,NickAlumne,NomActivitat,Data")] ActivitatAlumne activitatAlumne)
        {
            if (ModelState.IsValid)
            {
                db.ActivitatsAlumne.Add(activitatAlumne);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(activitatAlumne);
        }

        // GET: ActivitatAlumnes/Edit/5
        public ActionResult Edit(float? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ActivitatAlumne activitatAlumne = db.ActivitatsAlumne.Find(id);
            if (activitatAlumne == null)
            {
                return HttpNotFound();
            }
            return View(activitatAlumne);
        }

        // POST: ActivitatAlumnes/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Nota,NickAlumne,NomActivitat,Data")] ActivitatAlumne activitatAlumne)
        {
            if (ModelState.IsValid)
            {
                db.Entry(activitatAlumne).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(activitatAlumne);
        }

        // GET: ActivitatAlumnes/Delete/5
        public ActionResult Delete(float? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ActivitatAlumne activitatAlumne = db.ActivitatsAlumne.Find(id);
            if (activitatAlumne == null)
            {
                return HttpNotFound();
            }
            return View(activitatAlumne);
        }

        // POST: ActivitatAlumnes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(float id)
        {
            ActivitatAlumne activitatAlumne = db.ActivitatsAlumne.Find(id);
            db.ActivitatsAlumne.Remove(activitatAlumne);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
