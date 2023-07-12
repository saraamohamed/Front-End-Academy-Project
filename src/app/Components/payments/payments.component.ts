import { Component } from '@angular/core';
import { PaymentService } from 'src/Service/Payment.Service';
import { Validators,FormControl,FormGroup } from '@angular/forms';
import { BranchService } from 'src/Service/branch.service';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  branchs:any []=[]
  Allcourses:any
  isEdit:boolean=false;
  selectedCourseID!:number;
  selectedSubjectID!:Number;
  courceId:any
  courseId:any


  // courseId:any
  constructor(
    private paymentService:PaymentService,
    private branchService:BranchService,
    ){}

    trainsacteForm =new FormGroup({
      branchSelect: new FormControl('',[Validators.required]),
      studentNameSelected: new FormControl('',[Validators.required]),
      courseSelect: new FormControl('',[Validators.required]),
      Remainingamount: new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),
      Theamountpaid: new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),

  })

  get getbranchSelect(){
    return this.trainsacteForm.controls['branchSelect']
  };
  get getstudentNameSelected(){
    return this.trainsacteForm.controls['studentNameSelected']
  };
  get getcourseSelect(){
    return this.trainsacteForm.controls['courseSelect']
  };  get getRemainingamount(){
    return this.trainsacteForm.controls['Remainingamount']
  };  get getTheamountpaid(){
    return this.trainsacteForm.controls['Theamountpaid']
  };

  formHandler(e:any){

  }
  


loadBranchs() {

 this.branchService.GetAllBranch().subscribe({
   next: (response: any) => {
     this.branchs = response; 
     console.log(response);     
   },
   error: (error) => {
     console.log(error);
   }
 });
}

   ngOnInit(): void {

    this.loadBranchs()

   }
  }
// // this.loadSubjects()
// console.log("on it fn");


// }





// DeleteSubject(id:number){
//     this.paymentService.deleteSubject(id).subscribe(()=>{
//       console.log("deleted")
//       this.loadSubjects();
//   })
//   }
//   EditSubject(id:number){
//     this.paymentService.getSubjectById(id).subscribe((result:any)=>{
//       console.log(result)
//       this.isEdit=true;
//       console.log(this.isEdit);
      
//       const subject=result
//       this.trainsacteForm.patchValue({
//         subjectName:subject.subjectName,
//         subjectCourse:subject.courseId,
       
//       })
//     })
//   }
//   saveUpdate(){
//     const subject={
//       subjectId:this.courseId,
//       subjectName:this.trainsacteForm.value.subjectName,
//       courseId:this.trainsacteForm.value.subjectCourse,
//     }
//     console.log(subject);
    
//     this.paymentService.editSubject(subject).subscribe(()=>{
//       console.log("edited")
//       this.loadSubjects();
//       this.isEdit=false;
//       this.courceId=0;
//       this.trainsacteForm.reset();
//       this.ngOnInit();

//   })
//   }
//   AddSubject(){
//     const subject={
//       subjectName:this.trainsacteForm.value.subjectName,
//       courseId:this.trainsacteForm.value.subjectCourse,
//     }
//     console.log(subject)
//     this.paymentService.addSubject(subject).subscribe(()=>{
//       console.log("added");
//       this.loadSubjects();
//       this.trainsacteForm.reset();

//     })
//   }
//   back(){
//     this.trainsacteForm.reset();
//   }

 //  }
