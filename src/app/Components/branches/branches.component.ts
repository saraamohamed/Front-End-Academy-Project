import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BranchService } from './../../../Service/branch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit
{
  isEdit:boolean=false;
  selectedBranchID!:number;
  branches:any []=[]

  loadBranches():void{
    this.branchService.GetAllBranch().subscribe((result:any)=>{
      this.branches=result
      console.log(this.branches)
    })
  }
  constructor(private branchService : BranchService ) {
  }
  branchForm =new FormGroup({
    branchName: new FormControl(''),
    supervisorName: new FormControl(''),
    supervisorPhoneNumber: new FormControl(''),
    supervisorLandlineNumber: new FormControl('')
  })
  ngOnInit(): void {
    this.loadBranches();
  }
  DeleteBranch(id:number){
    this.branchService.DeleteBranch(id).subscribe(()=>{
      console.log("deleted")
      this.loadBranches();
  })
  }
  EditBranch(id:number){
    this.selectedBranchID=id;
    this.branchService.GetBranchByID(id).subscribe((result:any)=>{
      console.log(result)
      this.isEdit=true;
      const branch=result
      this.branchForm.patchValue({
        branchName:branch.name,
        supervisorName:branch.supervisorName,
        supervisorPhoneNumber:branch.supervisorPhoneNumber,
        supervisorLandlineNumber:branch.supervisorPhoneNumber
      })
    })
  }
  saveUpdate(){
    const branch={
      id:this.selectedBranchID,
      name:this.branchForm.value.branchName,
      supervisorName:this.branchForm.value.supervisorName,
      supervisorPhoneNumber:this.branchForm.value.supervisorPhoneNumber,
      supervisorLandlineNumber:this.branchForm.value.supervisorLandlineNumber}
    this.branchService.UpdateBranch(branch).subscribe(()=>{
      console.log("edited")
      this.loadBranches();
      this.branchForm.reset();
  })
  }
  AddBranch(){
    const branch={
      name:this.branchForm.value.branchName,
      supervisorName:this.branchForm.value.supervisorName,
      supervisorPhoneNumber:this.branchForm.value.supervisorPhoneNumber,
      supervisorLandlineNumber:this.branchForm.value.supervisorLandlineNumber
    }
    console.log(branch)
    this.branchService.AddBranch(branch).subscribe(()=>{
      console.log("added");
      this.loadBranches();
      this.branchForm.reset();
    })
  }
  back(){
    this.branchForm.reset();
  }

}
