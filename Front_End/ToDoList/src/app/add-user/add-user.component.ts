import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { ToastrModule } from 'ngx-toastr';
import { fromReadableStreamLike } from 'rxjs/internal/observable/innerFrom';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,ToastrModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  userForm: FormGroup;
  isEditMode = false;
  userId;
  

  constructor(private fb:FormBuilder, private userService: UsersService, private router: Router,private route:ActivatedRoute,private toastr: ToastrModule){
    
    const uid = this.route.snapshot.paramMap.get("id");
    this.userId = Number(uid);

    if(this.userId){
      this.isEditMode = true;
    }else{
      this.isEditMode;
    }
    if(this.isEditMode == true){
      this.userForm = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        email: [''],
        address: [''],
        password: ['', Validators.required]
      })
    }else{
      this.userForm = this.fb.group({
        name: ['', Validators.required],
        email: [''],
        address: [''],
        password: ['', Validators.required]
      })
    }
    
  }



  ngOnInit(): void {
    if (this.isEditMode == true) {
      this.userService.getUser(this.userId).subscribe(data => {
        this.userForm.setValue(data)
      }, error => {
        alert("User Not Found");
      });
    }
  }

  onSubmit() {
    let user = this.userForm.value;

    if (this.isEditMode == true) {
      user.id = this.userId;
      this.userService.updateUser(user).subscribe(data => {
        alert("User is updated successfully");
        this.router.navigate(["/users"]);
      });
    } else {
      this.userService.createUsers(user).subscribe(data => {
        alert("User is created successfully");
        this.router.navigate(["/users"]);
      });
    }


  }
 

  cancel(){
    this.userForm.reset();
  } 
}