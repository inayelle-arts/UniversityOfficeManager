using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace UniversityOffice.Api.Migrations
{
    public partial class AlterPErson : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Students_PassportInfos_PassportInfoId",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_Tutors_PassportInfos_PassportInfoId",
                table: "Tutors");

            migrationBuilder.DropTable(
                name: "PassportInfos");

            migrationBuilder.DropIndex(
                name: "IX_Tutors_PassportInfoId",
                table: "Tutors");

            migrationBuilder.DropIndex(
                name: "IX_Students_PassportInfoId",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "PassportInfoId",
                table: "Tutors");

            migrationBuilder.DropColumn(
                name: "PassportInfoId",
                table: "Students");

            migrationBuilder.AddColumn<DateTime>(
                name: "Birthday",
                table: "Tutors",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "Tutors",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Tutors",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Gender",
                table: "Tutors",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Tutors",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MiddleName",
                table: "Tutors",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Series",
                table: "Tutors",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "Birthday",
                table: "Students",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "Students",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Students",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Gender",
                table: "Students",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Students",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MiddleName",
                table: "Students",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Series",
                table: "Students",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Birthday",
                table: "Tutors");

            migrationBuilder.DropColumn(
                name: "Code",
                table: "Tutors");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Tutors");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "Tutors");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Tutors");

            migrationBuilder.DropColumn(
                name: "MiddleName",
                table: "Tutors");

            migrationBuilder.DropColumn(
                name: "Series",
                table: "Tutors");

            migrationBuilder.DropColumn(
                name: "Birthday",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Code",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "MiddleName",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Series",
                table: "Students");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Tutors",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Subjects",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "StudyPlans",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Students",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Specialities",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "SessionResults",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Schedule",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Rooms",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Marks",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Groups",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Departments",
                newName: "id");

            migrationBuilder.AddColumn<int>(
                name: "PassportInfoId",
                table: "Tutors",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PassportInfoId",
                table: "Students",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "PassportInfos",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Birthday = table.Column<DateTime>(nullable: false),
                    Code = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    Gender = table.Column<int>(nullable: false),
                    LastName = table.Column<string>(nullable: true),
                    MiddleName = table.Column<string>(nullable: true),
                    Series = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PassportInfos", x => x.id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tutors_PassportInfoId",
                table: "Tutors",
                column: "PassportInfoId");

            migrationBuilder.CreateIndex(
                name: "IX_Students_PassportInfoId",
                table: "Students",
                column: "PassportInfoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Students_PassportInfos_PassportInfoId",
                table: "Students",
                column: "PassportInfoId",
                principalTable: "PassportInfos",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tutors_PassportInfos_PassportInfoId",
                table: "Tutors",
                column: "PassportInfoId",
                principalTable: "PassportInfos",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
