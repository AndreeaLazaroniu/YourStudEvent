using BEYourStudEvents.Dtos.Account;

namespace BEYourStudEvents.Dtos.Event;

public class EventDto
{
    public int EventId { get; set; }
    public string Title { get; set; } = String.Empty;
    public string Description { get; set; } = String.Empty;
    public string Location { get; set; } = String.Empty;
    public DateTime Date { get; set; }
    public string Price { get; set; } = String.Empty;
    public string Status { get; set; } = String.Empty;
    
    public IEnumerable<UserDto> Students { get; set; }
}