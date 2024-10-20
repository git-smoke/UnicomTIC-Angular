import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Task, TaskService } from '../task.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { SearchPipe } from '../search.pipe';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchPipe, DatePipe, FormsModule,RouterLink],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent implements OnInit {
  
  tasks: Task[] = [];
  searchText = '';


  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      p => {
        this.tasks = p;
      }
    );
  }

  onDelete(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(data => {
      alert("Task Deleted");
      this.taskService.getTasks().subscribe(
        p => {
          this.tasks = p;
        }
      );
    });
  }

  onEdit(taskId: number) {
    //this.router.navigate(['/task-edit'] , taskId);
  }


}
