import { Component, OnInit } from '@angular/core';
import { User, UsersService } from '../users.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  SearchPipe, SearchPipe2 } from "../search.pipe";

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [FormsModule, CommonModule,SearchPipe2,RouterLink],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{

  users: User[] = [];
  searchText = '';


  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      p => {
        this.users = p;
      }
    );
  }

  onDelete(userId: number) {
    this.userService.deleteUser(userId).subscribe(data => {
      alert("User Deleted");
      this.userService.getUsers().subscribe(
        p => {
          this.users = p;
        }
      );
    });
  }

  onEdit(userId: number) {
    //this.router.navigate(['/edit'] , userId);
  }


}
