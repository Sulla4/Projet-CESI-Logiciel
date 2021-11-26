using System;
using System.Collections.Generic;
using System.Text;
using DesktopAppProjetLogiciel.Models;
using Microsoft.EntityFrameworkCore;

namespace DesktopAppProjetLogiciel.Persistence.Contexts
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<City> Cities { get; set; }

        /// <summary>
        /// This method connect to the db
        /// </summary>
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //base.OnConfiguring(optionsBuilder);192.168.245.1 127.0.0.1
            optionsBuilder.UseSqlServer("Server = 127.0.0.1; Database = projetA4; User Id = admin; Password = P@ssword;");
        }
        /// <summary>
        /// This method represent the schema of the db
        /// </summary>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(p => p.IdUser);
                entity.Property(p => p.IdUser).IsRequired().ValueGeneratedOnAdd();
                entity.Property(p => p.FirstnameUser);
                entity.Property(p => p.LastnameUser);
                entity.Property(p => p.NameUser);
                entity.Property(p => p.AddressUser);
                entity.Property(p => p.SiretUser);
                entity.Property(p => p.MpUser).IsRequired();
                entity.Property(p => p.Email);
                entity.Property(p => p.UserPhone);
                entity.Property(p => p.PointsUser).IsRequired().HasDefaultValue(0);
                entity.Property(p => p.IsSponsorUser).IsRequired().HasDefaultValue(false);
                entity.Property(p => p.IsSponsorisedUser).IsRequired().HasDefaultValue(false);
            });
            modelBuilder.Entity<Role>(entity =>
            {
                entity.HasKey(p => p.IdRole);
                entity.Property(p => p.IdRole).IsRequired();
                entity.HasMany(p => p.Users).WithOne(p => p.Role).HasForeignKey(p => p.Role_IdRole);
            });
            modelBuilder.Entity<City>(entity =>
            {
                entity.HasKey(p => p.CpCity);
                entity.Property(p => p.CpCity).IsRequired();
                entity.Property(p => p.NameCity).IsRequired();
                entity.HasMany(p => p.users).WithOne(p => p.City).HasForeignKey(p => p.CpCityId);
            });
        }
    }
}
