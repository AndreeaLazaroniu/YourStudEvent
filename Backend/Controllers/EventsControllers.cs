using System.Security.Claims;
using BEYourStudEvents.Dtos.Account;
using BEYourStudEvents.Dtos.Event;
using BEYourStudEvents.Entities;
using BEYourStudEvents.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace BEYourStudEvents.Controllers;

[Route("api/Events")]
[ApiController]
public class EventsControllers : ControllerBase
{
    private readonly IEventService _eventService;
    private readonly UserManager<AppUser> _userManager;
    
    public EventsControllers(IEventService eventService, UserManager<AppUser> userManager)
    {
        _eventService = eventService;
        _userManager = userManager;
    }
    
    [HttpGet("GetEvents")]
    public async Task<IActionResult> GetEvents()
    {
        var events = await _eventService.GetEventsAsync();

        return Ok(events);
    }
    
    [HttpGet("GetStudents/{eventId}", Name = "GetStudents")]
    public async Task<ActionResult<UserDto>> GetStudents(int eventId)
    {
        var students = await _eventService.GetStudentsAsync(eventId);
        if (students == null)
        {
            return NotFound();
        }

        return Ok(students);
    }
    
    [Authorize]
    [HttpPost("CreateEvent")]
    public async Task<IActionResult> CreateEvent([FromBody]EventCreateDto eventDto)
    {
        var email = User.FindFirstValue(ClaimTypes.Email);
        if (string.IsNullOrEmpty(email))
        {
            return Unauthorized("User must be logged in.");
        }
        var user = await _userManager.FindByEmailAsync(email);
        if (user == null)
        {
            return Unauthorized("User not found.");
        }
        
        // Set the Organizer UserId
        eventDto.OrgUserId = user.Id;

        try
        {
            var newEvent = await _eventService.CreateEventAsync(eventDto);

            return Ok(newEvent);
        }
        catch (Exception e)
        {
            return StatusCode(500, "An error occurred while creating the event.");
        }
    }
    
    [HttpDelete("{id}", Name = "DeleteEvent")]
    public async Task<ActionResult> DeleteEvent(int id)
    {
        await _eventService.DeleteEventAsync(id);

        return NoContent();
    }
    
    [HttpPut("{id}", Name = "UpdateEvent")]
    public async Task<ActionResult<EventDto>> UpdateEvent(int id, [FromBody] EventUpdateDto eventDto)
    {
        if (eventDto.EventId != id)
        {
            return BadRequest("Event ID mismatch");
        }

        var updatedEvent = await _eventService.UpdateEventAsync(eventDto);

        return Ok(updatedEvent);
    }
    
    [HttpPost("AddStudent/{eventId}")]
    public async Task<ActionResult<UserDto>> AddStudent(int eventId, [FromBody] UserDto userDto)
    {
        var students = await _eventService.AddStudentAsync(eventId, userDto);

        return Ok(students);
    }
}