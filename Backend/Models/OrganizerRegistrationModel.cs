using System.ComponentModel.DataAnnotations;

namespace BEYourStudEvent2.Models;

public class OrganizerRegistrationModel
{
    public int Id { get; set; }
    [Required] public string Name { get; set; } = String.Empty;
    [Required] public string Password { get; set; } = String.Empty;
    [Required] public string Email { get; set; } = String.Empty;
    [Required] public string PhoneNumber { get; set; } = String.Empty;
    [Required] public string Address { get; set; } = String.Empty;
}