import { Routes } from '@angular/router';
import { ListTaskComponent } from './list-task/ListTaskComponent';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: AppComponent},

    { path: 'tasks', component: ListTaskComponent },
    { path: 'users', component: ListUserComponent },

    { path: 'task-add', component: AddTaskComponent },
    { path: 'user-add', component: AddUserComponent },

    { path: 'task-edit/:id', component: UpdateTaskComponent },
    { path: 'user-edit/:id', component: AddUserComponent }
];
