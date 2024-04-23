namespace BEYourStudEvent2.Entities;

public class OrgUser
{
    public int Id { get; set; }
    public string Name { get; set; } = String.Empty;
    public string Password { get; set; } = String.Empty;
    public string Email { get; set; } = String.Empty;
    public string PhoneNumber { get; set; } = String.Empty;
    public string Address { get; set; } = String.Empty;
    // public IFormFile OrgImageFile { get; set; }
    
    //public ICollection<Event> Events { get; set; } = new HashSet<Event>();
}