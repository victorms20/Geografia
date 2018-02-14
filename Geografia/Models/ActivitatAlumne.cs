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
        public int Id_Alumne { get; set; }
        [ForeignKey("Id_Alumne")]
        virtual public Alumne Alumne { get; set; }

        [Key]
        public int Id_Activitat { get; set; }
        [ForeignKey("Id_Activitat")]
        virtual public Activitat Activitat { get; set; }

        [Key]
        public DateTime Data { get; set; }

        public float Nota { get; set; }
    }
}