using System.ComponentModel.DataAnnotations;

namespace BEYourStudEvent2.Models;

public class LoginModel
{
    [Required] public string Email { get; set; }

    [Required] public string Password { get; set; }
}