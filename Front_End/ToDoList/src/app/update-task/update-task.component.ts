import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent implements OnInit {


  taskId: number
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    const tid = this.route.snapshot.paramMap.get("id");
    this.taskId = Number(tid);

    this.taskForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: [''],
      dueDate: [''],
      priority: ['', Validators.required]
    })
  }

  cancel() {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {


    this.taskService.getTask(this.taskId).subscribe(data => {
      console.log(data);

      //let dueDate = new Date(data.dueDate).toISOString().slice(0,10)
      this.taskForm.setValue(data)
    }
    );
  }

  onSubmit() {
    const task = this.taskForm.value;

    this.taskService.updateTask(task).subscribe(data =>
      {
        this.toastr.success("Task updated Succesfully");
        this.router.navigate(['/']);
      }

    )
  }
}