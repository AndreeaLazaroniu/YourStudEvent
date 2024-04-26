using BEYourStudEvent2.Entities;
using BEYourStudEvent2.Models;
using Microsoft.AspNetCore.Mvc;

namespace BEYourStudEvent2.Services;

public interface IAuthenticationService
{
    // User Authenticate(string email, string password);
    // string GenerateJwtToken(User user);
    Task<bool> RegisterStudentUserAsync(StudUser model);
    Task<bool> RegisterOrganizerUserAsync(OrgUser model);
    Task<bool> LoginUserAsync(string email, string password);
    public string HashPassword(string password);
    public bool VerifyPassword(string enteredPassword, string storedHash);
}