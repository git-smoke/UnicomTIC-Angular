import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(){
    return this.http.get<Task[]>('https://localhost:7263/api/TaskItems')
  }

  createTasks(task: Task){
    return this.http.post('https://localhost:7263/api/TaskItems', task)
  }

  deleteTask(taskId: number){
    return this.http.delete('https://localhost:7263/api/TaskItems/' + taskId)
  }

  getTask(taskId: number){
    return this.http.get('https://localhost:7263/api/TaskItems/' + taskId)
  }

  updateTask(task: Task){
    return this.http.put('https://localhost:7263/api/TaskItems/' + task.id,task)
  }
}

export interface Task {
  id: number,
  title: string,
  description: string,
  dueDate: string,
  priority: string
}