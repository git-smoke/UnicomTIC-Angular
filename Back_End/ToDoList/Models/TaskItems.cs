using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ToDoList.Models
{
    public class TaskItems
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        [Required]
        public string Priority { get; set; }
        public int? AssigneeId { get; set; }
        public Users? Assignee { get; set; }
        public ICollection<CheckLists>? CheckLists { get; set; }
     

        
    }
}
