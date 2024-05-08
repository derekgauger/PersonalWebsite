using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

public class Education {
    public int Id { get; set; }
    public string Title { get; set; }
    public string DateRange { get; set; }
    public string Description { get; set; }
    public string TechnologiesUsed { get; set; }
    public int Sequence { get; set; }
}

public class EducationDBContext : DbContext {
    public DbSet<Education> Education { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseMySQL("Server=localhost;Port=3306;Database=PersonalWebsite;Uid=root;Pwd=root;");
}

[ApiController]
[Route("education")]

public class EducationController : ControllerBase
{
    private readonly EducationDBContext _context;

    public EducationController(EducationDBContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IEnumerable<Education> Get()
    {
        var educations = _context.Education.OrderByDescending(w => w.Sequence).ToList();
        return educations;
    }

    [HttpGet("{id}")]
    public Education Get(int id)
    {
        return _context.Education.Find(id);
    }

    [HttpPost]
    public void Post([FromBody] Education education)
    {
        _context.Education.Add(education);
        _context.SaveChanges();
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Education education)
    {
        var entity = _context.Education.Find(id);
        entity.Title = education.Title;
        entity.DateRange = education.DateRange;
        entity.Description = education.Description;
        entity.TechnologiesUsed = education.TechnologiesUsed;
        entity.Sequence = education.Sequence;
        _context.SaveChanges();
    }

    [HttpDelete("{id}")]
    public void Delete(int id)
    {
        var education = _context.Education.Find(id);
        _context.Education.Remove(education);
        _context.SaveChanges();
    }
}