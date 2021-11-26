using Microsoft.EntityFrameworkCore.Migrations;

namespace DesktopAppProjetLogiciel.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cities",
                columns: table => new
                {
                    CpCity = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NameCity = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cities", x => x.CpCity);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    IdRole = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.IdRole);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    IdUser = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstnameUser = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastnameUser = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NameUser = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AddressUser = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SiretUser = table.Column<int>(type: "int", nullable: false),
                    MpUser = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmailUser = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserPhone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PointUser = table.Column<int>(type: "int", nullable: false, defaultValue: 0),
                    IsSponsorUser = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    IsSponsorisedUser = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    IdRole = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    CpCity = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.IdUser);
                    table.ForeignKey(
                        name: "FK_Users_Cities_CpCity",
                        column: x => x.CpCity,
                        principalTable: "Cities",
                        principalColumn: "CpCity",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Users_Roles_IdRole",
                        column: x => x.IdRole,
                        principalTable: "Roles",
                        principalColumn: "IdRole",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_CpCity",
                table: "Users",
                column: "CpCity");

            migrationBuilder.CreateIndex(
                name: "IX_Users_IdRole",
                table: "Users",
                column: "IdRole");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Cities");

            migrationBuilder.DropTable(
                name: "Roles");
        }
    }
}
