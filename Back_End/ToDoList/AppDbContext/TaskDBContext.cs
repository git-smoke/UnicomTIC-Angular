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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Users>()
                .HasOne(u => u.Address)
                .WithOne(a => a.User)
                .HasForeignKey<Address>(a => a.UserId);

            modelBuilder.Entity<Users>()
                .HasMany(u => u.TaskItems)
                .WithOne(t => t.Assignee)
                .HasForeignKey(t => t.AssigneeId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<TaskItems>()
                .HasMany(t => t.CheckLists)
                .WithOne(c => c.Task)
                .HasForeignKey(c => c.TaskId);

            base.OnModelCreating(modelBuilder);
        }
    }
}
