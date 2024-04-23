using BEYourStudEvent2.Models;
using Microsoft.EntityFrameworkCore;

namespace BEYourStudEvent2.Data;

public class YSEDBContext : DbContext
{
    public YSEDBContext(DbContextOptions<YSEDBContext> dbContextOptions) : base(dbContextOptions)
    {
        
    }
    
    public DbSet<StudentRegistrationModel> Students { get; set; }
    public DbSet<OrganizerRegistrationModel> Organizers { get; set; }
}