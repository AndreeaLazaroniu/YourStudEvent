namespace BEYourStudEvent2.Entities;

public class User
{
    public int Id { get; set; }
    public string FirstName { get; set; } = String.Empty;
    public string LastName { get; set; } = String.Empty;
    public string Email { get; set; }  = String.Empty;
    public string Password { get; set; } = String.Empty;
    public string PhoneNumber { get; set; } = String.Empty;
    public DateTime DateOfBirth { get; set; }
    public string University { get; set; } = String.Empty;
    public string Address { get; set; } = String.Empty;
    // public IFormFile UserImageFile { get; set; }
    
    // public ICollection<Event> Events { get; set; } = new HashSet<Event>();
}