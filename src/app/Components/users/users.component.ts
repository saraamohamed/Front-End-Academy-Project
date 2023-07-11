import { Component,OnInit} from '@angular/core';
import { UserService } from 'src/Service/User.Service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  AllUsers:any
  constructor(private userService:UserService){}

ngOnInit(): void {

  this.userService.getAllUsers().subscribe({
      next: (response: any) => {
        this.AllUsers = response; 
        console.log(response);
           
      },
      error: (error) => {
        console.log(error);
      }
    });

  }

}
