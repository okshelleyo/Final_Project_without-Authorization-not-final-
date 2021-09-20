using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace GC_Final_Project.Models
{
    public partial class MappsterpiecesDBContext : DbContext
    {
        public MappsterpiecesDBContext()
        {
        }

        public MappsterpiecesDBContext(DbContextOptions<MappsterpiecesDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TheLikes> TheLikes { get; set; }
        public virtual DbSet<Visitor> Visitors { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=mappsterpiecesserver.database.windows.net;Database=MappsterpiecesDB;User Id=mappsterpieces;Password=gNN=Mg9_R\"Vg6^Hm;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<TheLikes>(entity =>
            {
                entity.HasKey(e => e.EntryId)
                    .HasName("PK__TheLikes__F57BD2D7F08EDC4F");

                entity.Property(e => e.EntryId).HasColumnName("EntryID");

                entity.Property(e => e.Department).HasMaxLength(200);

                entity.Property(e => e.ObjectId).HasColumnName("ObjectID");

                entity.Property(e => e.VisitorId).HasColumnName("VisitorID");

                //////       entity.HasOne(d => d.Visitor)
                //           .WithMany(p => p.TheLikes)
                //           .HasForeignKey(d => d.VisitorId)
                //           .HasConstraintName("FK__TheLikes__Depart__5EBF139D");
            });

            modelBuilder.Entity<Visitor>(entity =>
            {
                entity.Property(e => e.VisitorId).HasColumnName("VisitorID");

                entity.Property(e => e.VisitorEmail).HasMaxLength(250);

                entity.Property(e => e.VisitorPassword).HasMaxLength(250);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
