namespace Geografia.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.ActivitatAlumnes", "Nota", c => c.Single(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.ActivitatAlumnes", "Nota", c => c.Decimal(nullable: false, precision: 18, scale: 2));
        }
    }
}
