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
        [Display(Name = "Nom Activitat")]
        public string NomActivitat { get; set; }

        public virtual List<ActivitatAlumne> Activitats { get; set; } = new List<ActivitatAlumne>();
    }
}