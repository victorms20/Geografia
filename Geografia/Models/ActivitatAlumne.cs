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
        public Guid Id { get; set; }

        public string NickAlumne { get; set; }

        public string NomActivitat { get; set; }

        public DateTime Data { get; set; } = DateTime.Now;

        public float Nota { get; set; }
    }
}