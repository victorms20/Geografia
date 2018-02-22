namespace Geografia.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ActivitatAlumnes",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        NickAlumne = c.String(),
                        NomActivitat = c.String(),
                        Data = c.DateTime(nullable: false),
                        Nota = c.Single(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ActivitatAlumnes");
        }
    }
}
