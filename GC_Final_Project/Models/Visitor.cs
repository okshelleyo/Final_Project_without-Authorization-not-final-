using System;
using System.Collections.Generic;

#nullable disable

namespace GC_Final_Project.Models
{
    public partial class Visitor
    {
        public Visitor()
        {
            TheLikes = new HashSet<TheLikes>();
        }

        public int VisitorId { get; set; }
        public string VisitorEmail { get; set; }
        public string VisitorPassword { get; set; }

        public virtual ICollection<TheLikes> TheLikes { get; set; }
    }
}
