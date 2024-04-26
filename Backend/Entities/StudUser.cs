using System.ComponentModel.DataAnnotations;

namespace BEYourStudEvent2.Entities;

public class StudUser
{
    public int Id { get; set; }
    [Required] public string FirstName { get; set; } = String.Empty;
    [Required] public string LastName { get; set; } = String.Empty;
    [Required] public string Email { get; set; }  = String.Empty;
    [Required] public string Password { get; set; } = String.Empty;
    [Required] public string PhoneNumber { get; set; } = String.Empty;
    [Required] public DateTime DateOfBirth { get; set; }
    [Required] public string University { get; set; } = String.Empty;
    [Required] public string Address { get; set; } = String.Empty;
    // public IFormFile UserImageFile { get; set; }
    
    public virtual ICollection<Event> Events { get; set; } = new HashSet<Event>();
}