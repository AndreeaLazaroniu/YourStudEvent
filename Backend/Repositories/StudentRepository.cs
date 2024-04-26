using BEYourStudEvent2.Data;
using BEYourStudEvent2.Entities;
using Microsoft.EntityFrameworkCore;

namespace BEYourStudEvent2.Repositories;

public class StudentRepository : BaseRepository<StudUser>
{
    public StudentRepository(YSEDBContext context) : base(context)
    {
    }
    
    public override async Task<List<StudUser>> GetAllAsync()
    {
        try
        {
            return await _context.Students.Include(c => c.Events).ToListAsync();
        } catch (Exception ex)
        {
            throw new Exception($"Error when retrieving data from DB: {ex.Message}", ex);
        }
    }
    
    public override async Task<StudUser?> FindByIdAsync(int id)
    {
        try
        {
            return await _context.Students.Include(c => c.Events).FirstOrDefaultAsync(c => c.Id == id);
        } catch (Exception ex)
        {
            throw new Exception($"Error when retrieving entity by id {id}, {ex.Message}", ex);
        }
    }
}