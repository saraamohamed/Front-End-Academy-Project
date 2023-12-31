import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UsersComponent } from './Components/users/users.component';
import { StudentsComponent } from './Components/students/students.component';
import { BranchesComponent } from './Components/branches/branches.component';
import { SubjectsComponent } from './Components/subjects/subjects.component';
import { PaymentsComponent } from './Components/payments/payments.component';
import { CoursesComponent } from './Components/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    UsersComponent,
    StudentsComponent,
    BranchesComponent,
    SubjectsComponent,
    PaymentsComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
