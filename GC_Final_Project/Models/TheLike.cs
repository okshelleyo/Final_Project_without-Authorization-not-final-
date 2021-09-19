using System;
using System.Collections.Generic;

#nullable disable

namespace GC_Final_Project.Models
{
    public partial class TheLike
    {
        public int EntryId { get; set; }
        public int? ObjectId { get; set; }
        public int? VisitorId { get; set; }
        public bool VisitedObject { get; set; }
        public string Department { get; set; }

        public virtual Visitor Visitor { get; set; }
    }
}
