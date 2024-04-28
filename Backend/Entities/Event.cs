using System.ComponentModel.DataAnnotations;

namespace BEYourStudEvents.Entities;

public class Event
{
    [Key]
    public int Id { get; set; } 
    public string Title { get; set; } = String.Empty;
    public string Description { get; set; } = String.Empty;
    public string Location { get; set; } = String.Empty;
    public DateTime Date { get; set; }
    public string Price { get; set; } = String.Empty;
    public string Status { get; set; } = String.Empty;
    
    public string OrgUserId { get; set; } = String.Empty;
    public AppUser OrgUser { get; set; } = null!;
    
    public int CatId { get; set; }
    public Category Category { get; set; } = null!;
    
    public ICollection<AppUser> Students { get; set; } = new HashSet<AppUser>();
 
    
    // public string ImageUrl { get; set; } = String.Empty;
}