using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Geografia.Models
{
    public class Activitat
    {
        [Key]
        public int Id { get; set; }

        [Display(Name = "Nom Activitat")]
        public string NomActivitat { get; set; }

        //Lista de diferentes Actividades
        List<Activitat> TipusActivitat { get; set; } = new List<Activitat>();

        public virtual List<ActivitatAlumne> Activitats { get; set; } = new List<ActivitatAlumne>();
    }
}