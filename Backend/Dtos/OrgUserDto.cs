using BEYourStudEvent2.Entities;

namespace BEYourStudEvent2.Dtos;

public class OrgUserDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string PhoneNumber { get; set; }
    public string Address { get; set; }
    
    public IEnumerable<EventDto> Events { get; set; }
}