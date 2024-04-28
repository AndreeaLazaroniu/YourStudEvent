namespace BEYourStudEvents.Dtos.Event;

public class EventCreateDto
{
    public string Title { get; set; } = String.Empty;
    public string Description { get; set; } = String.Empty;
    public string Location { get; set; } = String.Empty;
    public DateTime Date { get; set; }
    public string Price { get; set; } = String.Empty;
    public string Status { get; set; } = String.Empty;
    public int CatId { get; set; }
    public string OrgUserId { get; set; } = String.Empty;
}