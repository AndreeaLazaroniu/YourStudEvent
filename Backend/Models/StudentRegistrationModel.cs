using System.ComponentModel.DataAnnotations;
using BEYourStudEvent2.Entities;

namespace BEYourStudEvent2.Models;

public class StudentRegistrationModel
{
    public int Id { get; set; }
    [Required] public string FirstName { get; set; }
    [Required] public string LastName { get; set; }
    [Required] public string Email { get; set; } 
    [Required] public string Password { get; set; }
    [Required] public string PhoneNumber { get; set; }
    [Required] public DateTime DateOfBirth { get; set; }
    [Required] public string University { get; set; }
    [Required] public string Address { get; set; }
}