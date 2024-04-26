using BEYourStudEvent2.Entities;
using BEYourStudEvent2.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace BEYourStudEvent2.Data;

public class YSEDBContext : IdentityDbContext
{
    public YSEDBContext(DbContextOptions<YSEDBContext> dbContextOptions) : base(dbContextOptions)
    {
        
    }
    
    public DbSet<StudUser> Students { get; set; }
    public DbSet<OrgUser> Organizers { get; set; }
    public DbSet<Event> Events { get; set; }
    public DbSet<Category> Categories { get; set; }
}