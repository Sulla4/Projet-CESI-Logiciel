﻿// <auto-generated />
using DesktopAppProjetLogiciel.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DesktopAppProjetLogiciel.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20210701143211_initial2")]
    partial class initial2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.7")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DesktopAppProjetLogiciel.Models.City", b =>
                {
                    b.Property<int>("CpCity")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("NameCity")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CpCity");

                    b.ToTable("Cities");
                });

            modelBuilder.Entity("DesktopAppProjetLogiciel.Models.Role", b =>
                {
                    b.Property<string>("IdRole")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("IdRole");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("DesktopAppProjetLogiciel.Models.User", b =>
                {
                    b.Property<int>("IdUser")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AddressUser")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CpCityId")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstnameUser")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsSponsorUser")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(false);

                    b.Property<bool>("IsSponsorisedUser")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(false);

                    b.Property<string>("LastnameUser")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MpUser")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NameUser")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PointsUser")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasDefaultValue(0);

                    b.Property<string>("Role_IdRole")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("SiretUser")
                        .HasColumnType("int");

                    b.Property<string>("UserPhone")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdUser");

                    b.HasIndex("CpCityId");

                    b.HasIndex("Role_IdRole");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("DesktopAppProjetLogiciel.Models.User", b =>
                {
                    b.HasOne("DesktopAppProjetLogiciel.Models.City", "City")
                        .WithMany("users")
                        .HasForeignKey("CpCityId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DesktopAppProjetLogiciel.Models.Role", "Role")
                        .WithMany("Users")
                        .HasForeignKey("Role_IdRole");

                    b.Navigation("City");

                    b.Navigation("Role");
                });

            modelBuilder.Entity("DesktopAppProjetLogiciel.Models.City", b =>
                {
                    b.Navigation("users");
                });

            modelBuilder.Entity("DesktopAppProjetLogiciel.Models.Role", b =>
                {
                    b.Navigation("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
