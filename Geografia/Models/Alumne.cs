using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Geografia.Models
{
    public class Alumne
    {
        [Key]
        public int Id { get; set; }
        
        public string NickName { get; set; }

        //Lista ActivitatsAlumne
        public virtual List<ActivitatAlumne> Activitats { get; set; } = new List<ActivitatAlumne>();
    }
}