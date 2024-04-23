using Microsoft.AspNetCore.Mvc;
using BEYourStudEvent2.Models;
using BEYourStudEvent2.Services;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

//TODOerror handling and exceptions
namespace BEYourStudEvent2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthenticationService _authService;
        
        public AuthController(IAuthenticationService authService)
        {
            _authService = authService;
        }

        // [HttpPost("login")]
        // public ActionResult Login([FromBody] LoginModel login)
        // {
        //     if (!ModelState.IsValid)
        //     {
        //         return BadRequest(ModelState);
        //     }
        //
        //     var user = _authService.Authenticate(login.Email, login.Password);
        //
        //     if (user == null)
        //     {
        //         return Unauthorized(new { message = "Invalid credentials" });
        //     }
        //
        //     var token = _authService.GenerateJwtToken(user);
        //     return Ok(new { token = token });
        // }
        
        [HttpPost("studentRegister")]
        public async Task<IActionResult> studentRegister([FromBody] StudentRegistrationModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _authService.RegisterStudentUserAsync(model);
                if (result)
                {
                    return Ok("User registered successfully.");
                }
            }
            return BadRequest("User registration failed.");
        }
        
        [HttpPost("organizerRegister")]
        public async Task<IActionResult> organizerRegister([FromBody] OrganizerRegistrationModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _authService.RegisterOrganizerUserAsync(model);
                if (result)
                {
                    return Ok("User registered successfully.");
                }
            }
            return BadRequest("User registration failed.");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = await _authService.LoginUserAsync(model.Email, model.Password);
            if (result)
            {
                return Ok("Login successful");
            }

            return Unauthorized("Invalid credentials");
        }
    }
}