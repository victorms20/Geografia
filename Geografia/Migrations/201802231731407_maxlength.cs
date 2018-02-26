namespace Geografia.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class maxlength : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.ActivitatAlumnes", "NickAlumne", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.ActivitatAlumnes", "NickAlumne", c => c.String(maxLength: 19));
        }
    }
}
