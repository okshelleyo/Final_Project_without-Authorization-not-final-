using System;
using System.Collections.Generic;

#nullable disable

namespace GC_Final_Project.Models
{
    public partial class TheLikes
    {
        public int EntryId { get; set; }
        public int? ObjectId { get; set; }
        public int? VisitorId { get; set; }
        public bool VisitedObject { get; set; }
        public string Department { get; set; }
        public string artistDisplayName { get; set; }
        public string title { get; set; }
        public string primaryImage { get; set; }
        public string artistDisplayBio { get; set; }
        public string medium { get; set; }
        public string objectDate { get; set; }

        public virtual Visitor Visitor { get; set; }
    }
}
