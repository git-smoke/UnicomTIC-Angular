import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  taskForm: FormGroup;

  constructor(private fb:FormBuilder, private taskService: TaskService, private router: Router){
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: [''],
      priority: ['', Validators.required]
    })
  }


  onSubmit(){
    let task = this.taskForm.value;
    this.taskService.createTasks(task).subscribe(
      p => {
        alert("Task Created Succesfully");
         this.router.navigate(['/']);
      }
    )
  }

  cancel(){
    this.taskForm.reset();
  } 
}


