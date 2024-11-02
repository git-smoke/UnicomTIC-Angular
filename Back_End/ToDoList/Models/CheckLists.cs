using Microsoft.AspNetCore.Mvc.ApplicationModels;
using System.ComponentModel.DataAnnotations;

namespace ToDoList.Models
{
    public class CheckLists
    {
        [Key]
        public int id {  get; set; }
        public string name { get; set; }
        public bool isDone { get; set; }
        public int TaskId   { get; set; }
        public TaskItems? Task { get; set; }
        
    }
}
