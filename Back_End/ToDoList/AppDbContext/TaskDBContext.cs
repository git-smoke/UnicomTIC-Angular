using Microsoft.EntityFrameworkCore;
using ToDoList.Models;

namespace ToDoList.AppDbContext

{
    public class TaskDBContext : DbContext
    {
        public TaskDBContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<TaskItems> Tasks { get; set; }
        public DbSet<Users> Users { get; set; }
    }
}
