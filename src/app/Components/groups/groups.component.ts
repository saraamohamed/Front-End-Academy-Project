import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/Service/Groups.Service';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {
  groups:any;
  constructor(private getAllGroubsAuthService : GroupService) {}
  GroupAuthForm = new FormGroup({
    name :new FormControl('',[Validators.required , Validators.minLength(5)]),
    all : new FormControl(''),
    academyinnumber : new FormControl(''),
    users : new FormControl(''),
    Groups :new FormControl(''),
    branches : new FormControl(''),
    Courses :new FormControl(''),
    Subject :new FormControl(''),
    Student : new FormControl(''),
  });
  
  get GetAll(){
    return this.GroupAuthForm.controls['all'];
  }
    ngOnInit(): void {
      this.getAllGroubsAuthService.getAllGroupsAuth().subscribe(
        {
          next : (Response)=>{
            this.groups=Response;
          },
          error : ()=>{
          console.error();
            
        }
        }
      );
  }
  AddNewGroup(e:any){
    e.preventDefault();
    console.log(this.GroupAuthForm.value);
    
    if(this.GroupAuthForm.status =='VALID'){
      console.log(this.GroupAuthForm);
    }
    else {
      console.log('Error')
    }
    
  }
}
