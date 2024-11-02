using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using System.ComponentModel.DataAnnotations;

namespace ToDoList.Models
{
    public class Address
    {
        [Key]
        public int Id { get; set; }
        public string AddressLine1 { get; set; }
        public string? AddressLine2 { get; set; }
        public string City { get; set; }
        public int UserId { get; set; }
        public Users? User { get; set; }
    }
}
