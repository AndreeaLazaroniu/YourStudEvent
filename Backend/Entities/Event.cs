namespace BEYourStudEvent2.Entities;

public class Event
{
    public int EventId { get; set; }
    public string Name { get; set; } = String.Empty;
    public string Description { get; set; } = String.Empty;
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; } 
    public string Location { get; set; } = String.Empty;
    public string Price { get; set; } = String.Empty;
    public int CategoryId { get; set; }
    public int OrganizerId { get; set; }

    public ICollection<StudUser> Students { get; set; } = new HashSet<StudUser>();

    // public IFormFile EventImageFile { get; set; }
}