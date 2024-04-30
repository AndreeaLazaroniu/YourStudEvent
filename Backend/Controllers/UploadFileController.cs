using BEYourStudEvents.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BEYourStudEvents.Controllers;

[ApiController]
[Route("api/content")]
public class UploadFileController : ControllerBase
{
    private readonly IFileService _fileService;

    public UploadFileController(IFileService fileService)
    {
        _fileService = fileService;
    }
        
    [HttpPost("uploadFile")]
    public async Task<IActionResult> PostFile(IFormFile file)
    {
        var response =await _fileService.UploadAsync(file);
        return Ok(response);
    }
}