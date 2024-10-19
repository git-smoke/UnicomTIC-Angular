using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoList.AppDbContext;
using ToDoList.Models;

namespace ToDoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskItemsController : ControllerBase
    {
        private readonly TaskDBContext _context;

        public TaskItemsController(TaskDBContext context)
        {
            _context = context;
        }

        // GET: api/TaskItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskItems>>> GetTasks()
        {
            return await _context.Tasks.ToListAsync();
        }

        // GET: api/TaskItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskItems>> GetTaskItems(int id)
        {
            var taskItems = await _context.Tasks.FindAsync(id);

            if (taskItems == null)
            {
                return NotFound();
            }

            return taskItems;
        }

        // PUT: api/TaskItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItems(int id, TaskItems taskItems)
        {
            if (id != taskItems.Id)
            {
                return BadRequest();
            }

            _context.Entry(taskItems).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaskItemsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TaskItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TaskItems>> PostTaskItems(TaskItems taskItems)
        {
            _context.Tasks.Add(taskItems);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTaskItems", new { id = taskItems.Id }, taskItems);
        }

        // DELETE: api/TaskItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaskItems(int id)
        {
            var taskItems = await _context.Tasks.FindAsync(id);
            if (taskItems == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(taskItems);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TaskItemsExists(int id)
        {
            return _context.Tasks.Any(e => e.Id == id);
        }
    }
}
