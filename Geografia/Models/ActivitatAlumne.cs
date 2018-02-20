using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Geografia.Models
{
    public class ActivitatAlumne
    {
        [Key]
        public int NickAlumne { get; set; }
        [ForeignKey("NickAlumne")]
        virtual public Alumne Alumne { get; set; }

        [Key]
        public int NickActivitat { get; set; }
        [ForeignKey("NickActivitat")]
        virtual public Activitat Activitat { get; set; }

        [Key]
        public DateTime Data { get; set; }

        public float Nota { get; set; }
    }
}