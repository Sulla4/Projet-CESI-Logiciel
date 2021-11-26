using Microsoft.EntityFrameworkCore.Migrations;

namespace DesktopAppProjetLogiciel.Migrations
{
    public partial class initial2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Cities_CpCity",
                table: "Users");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Roles_IdRole",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "PointUser",
                table: "Users",
                newName: "PointsUser");

            migrationBuilder.RenameColumn(
                name: "IdRole",
                table: "Users",
                newName: "Role_IdRole");

            migrationBuilder.RenameColumn(
                name: "EmailUser",
                table: "Users",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "CpCity",
                table: "Users",
                newName: "CpCityId");

            migrationBuilder.RenameIndex(
                name: "IX_Users_IdRole",
                table: "Users",
                newName: "IX_Users_Role_IdRole");

            migrationBuilder.RenameIndex(
                name: "IX_Users_CpCity",
                table: "Users",
                newName: "IX_Users_CpCityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Cities_CpCityId",
                table: "Users",
                column: "CpCityId",
                principalTable: "Cities",
                principalColumn: "CpCity",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Roles_Role_IdRole",
                table: "Users",
                column: "Role_IdRole",
                principalTable: "Roles",
                principalColumn: "IdRole",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Cities_CpCityId",
                table: "Users");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Roles_Role_IdRole",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "Role_IdRole",
                table: "Users",
                newName: "IdRole");

            migrationBuilder.RenameColumn(
                name: "PointsUser",
                table: "Users",
                newName: "PointUser");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Users",
                newName: "EmailUser");

            migrationBuilder.RenameColumn(
                name: "CpCityId",
                table: "Users",
                newName: "CpCity");

            migrationBuilder.RenameIndex(
                name: "IX_Users_Role_IdRole",
                table: "Users",
                newName: "IX_Users_IdRole");

            migrationBuilder.RenameIndex(
                name: "IX_Users_CpCityId",
                table: "Users",
                newName: "IX_Users_CpCity");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Cities_CpCity",
                table: "Users",
                column: "CpCity",
                principalTable: "Cities",
                principalColumn: "CpCity",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Roles_IdRole",
                table: "Users",
                column: "IdRole",
                principalTable: "Roles",
                principalColumn: "IdRole",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
