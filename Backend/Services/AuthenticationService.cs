using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using BEYourStudEvent2.Data;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using BEYourStudEvent2.Entities;
using BEYourStudEvent2.Models;
using Microsoft.EntityFrameworkCore;

namespace BEYourStudEvent2.Services;

public class AuthenticationService : IAuthenticationService
{
    // private readonly AppSettings _appSettings;

    private readonly YSEDBContext _context;
    
    public AuthenticationService(YSEDBContext context)
    {
        _context = context;
    }
    
    public string HashPassword(string password)
    {
        return BCrypt.Net.BCrypt.HashPassword(password);
    }
    
    public bool VerifyPassword(string enteredPassword, string storedHash)
    {
        return BCrypt.Net.BCrypt.Verify(enteredPassword, storedHash);
    }

    public async Task<bool> RegisterStudentUserAsync(StudUser model)
    {
        var existingUser = await _context.Students.FirstOrDefaultAsync(u => u.Email == model.Email);
        if (existingUser != null)
        {
            return false; // User already exists
        }
        
        // Hash password before saving it to the database
        model.Password = HashPassword(model.Password);

        _context.Students.Add(model);
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> RegisterOrganizerUserAsync(OrgUser model)
    {
        var existingUser = await _context.Organizers.FirstOrDefaultAsync(u => u.Email == model.Email);
        if (existingUser != null)
        {
            return false; // User already exists
        }
        
        // Hash password before saving it to the database
        model.Password = HashPassword(model.Password);

        _context.Organizers.Add(model);
        await _context.SaveChangesAsync();
        return true;
    }
    
    // public bool LoginUser(string email, string password)
    // {
    //     var user = _context.Students.FirstOrDefault(u => u.Email == email);
    //     if (user == null)
    //     {
    //         Console.WriteLine("No user found with that email address.");
    //         return false; // No user found
    //     }
    //
    //     // Check if the password hashes match
    //     if (!VerifyPassword(password, user.Password))
    //     {
    //         Console.WriteLine("Password does not match.");
    //         return false; // Password does not match
    //     }
    //
    //     return true; // Success
    // }
    
    public async Task<bool> LoginUserAsync(string email, string password)
    {
        var userStudent = await _context.Students.FirstOrDefaultAsync(u => u.Email == email);
        var userOrganizer = await _context.Organizers.FirstOrDefaultAsync(u => u.Email == email);
        if (userStudent != null  && VerifyPassword(password, userStudent.Password))
        {
            return true; // User login successful
        }
        else if (userOrganizer != null  && VerifyPassword(password, userOrganizer.Password))
        {
            return true; // User login successful
        }

        return false; // User login failed
    }
    
    // Add any other services you need, like a user repository or a hashing service

    // public AuthenticationService(IOptions<AppSettings> appSettings)
    // {
    //     _appSettings = appSettings.Value;
    // }
    
    // public User Authenticate(string email, string password)
    // {
    //     // This is where you'd check the provided email and password against the stored ones
    //     // For simplicity, let's assume we find a user. You would normally get this from a database
    //     var user = new User { Email = email, Id = 1, PasswordHash = "hashedpassword" };
    //
    //     // You should verify the password here. In production, you'd hash the incoming password and compare it with the stored hash
    //     // For this example, let's just assume they match if the emails do
    //     if (user == null || user.PasswordHash != password)
    //     {
    //         return null;
    //     }
    //
    //     // Authentication successful
    //     return user;
    // }

    // public string GenerateJwtToken(User user)
    // {
    //     // generate token that is valid for 7 days
    //     var tokenHandler = new JwtSecurityTokenHandler();
    //     var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
    //     var tokenDescriptor = new SecurityTokenDescriptor
    //     {
    //         Subject = new ClaimsIdentity(new[] { new Claim("id", user.Id.ToString()) }),
    //         Expires = DateTime.UtcNow.AddDays(7),
    //         SigningCredentials =
    //             new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
    //     };
    //     var token = tokenHandler.CreateToken(tokenDescriptor);
    //     return tokenHandler.WriteToken(token);
    // }
}

// public class AppSettings
// {
//     public string Secret { get; set; }
// }