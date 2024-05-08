using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

public class Projects {
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string TechnologiesUsed { get; set; }
    public string ProjectType { get; set; }
    public string GithubLink { get; set; }
    public string AccessLink { get; set; }
    public string TermsOfServiceLink { get; set; }
    public string PrivacyPolicyLink { get; set; }
    public string ProcessDescription { get; set; }
}

public class ProjectsDBContext : DbContext {
    public DbSet<Projects> Projects { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseMySQL("Server=localhost;Port=3306;Database=PersonalWebsite;Uid=root;Pwd=root;");
}

[ApiController]
[Route("projects")]

public class ProjectsController : ControllerBase
{
    private readonly ProjectsDBContext _context;

    public ProjectsController(ProjectsDBContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IEnumerable<Projects> Get()
    {
        var projects = _context.Projects.ToList();
        return projects;
    }

    [HttpGet("{id}")]
    public Projects Get(int id)
    {
        return _context.Projects.Find(id);
    }

    [HttpPost]
    public void Post([FromBody] Projects projects)
    {
        _context.Projects.Add(projects);
        _context.SaveChanges();
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Projects projects)
    {
        var entity = _context.Projects.Find(id);
        entity.Title = projects.Title;
        entity.Description = projects.Description;
        entity.TechnologiesUsed = projects.TechnologiesUsed;
        entity.ProjectType = projects.ProjectType;
        entity.GithubLink = projects.GithubLink;
        entity.AccessLink = projects.AccessLink;
        entity.TermsOfServiceLink = projects.TermsOfServiceLink;
        entity.PrivacyPolicyLink = projects.PrivacyPolicyLink;
        entity.ProcessDescription = projects.ProcessDescription;
        _context.SaveChanges();
    }

    [HttpDelete("{id}")]
    public void Delete(int id)
    {
        var projects = _context.Projects.Find(id);
        _context.Projects.Remove(projects);
        _context.SaveChanges();
    }
}