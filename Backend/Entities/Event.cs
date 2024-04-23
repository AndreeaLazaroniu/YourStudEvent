namespace BEYourStudEvent2.Entities;

public class Event
{
    public int EventId { get; set; }
    public int OrgId { get; set; }
    public string Name { get; set; } = String.Empty;
    public DateTime Date { get; set; }
    public string Price { get; set; } = String.Empty;
    public string Place { get; set; } = String.Empty;
    public string Description { get; set; } = String.Empty;
    // public IFormFile EventImageFile { get; set; }
}