using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

public class WorkExperience {
    public int Id { get; set; }
    public string Title { get; set; }
    public string Company { get; set; }
    public string DateRange { get; set; }
    public string Description { get; set; }
    public string TechnologiesUsed { get; set; }
    public string Location { get; set; }
    public int Sequence { get; set; }
}

public class WorkExperienceDBContext : DbContext {
    public DbSet<WorkExperience> WorkExperience { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseMySQL("Server=localhost;Port=3306;Database=PersonalWebsite;Uid=root;Pwd=root;");
}

[ApiController]
[Route("work-experience")]

public class WorkExperienceController : ControllerBase
{
    private readonly WorkExperienceDBContext _context;

    public WorkExperienceController(WorkExperienceDBContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IEnumerable<WorkExperience> Get()
    {
        var workExperiences = _context.WorkExperience.OrderByDescending(w => w.Sequence).ToList();
        return workExperiences;
    }

    [HttpGet("{id}")]
    public WorkExperience Get(int id)
    {
        return _context.WorkExperience.Find(id);
    }

    [HttpPost]
    public void Post([FromBody] WorkExperience workExperience)
    {
        _context.WorkExperience.Add(workExperience);
        _context.SaveChanges();
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody] WorkExperience workExperience)
    {
        var entity = _context.WorkExperience.Find(id);
        entity.Title = workExperience.Title;
        entity.Company = workExperience.Company;
        entity.DateRange = workExperience.DateRange;
        entity.Description = workExperience.Description;
        entity.TechnologiesUsed = workExperience.TechnologiesUsed;
        entity.Location = workExperience.Location;
        entity.Sequence = workExperience.Sequence;
        _context.SaveChanges();
    }

    [HttpDelete("{id}")]
    public void Delete(int id)
    {
        var workExperience = _context.WorkExperience.Find(id);
        _context.WorkExperience.Remove(workExperience);
        _context.SaveChanges();
    }
}