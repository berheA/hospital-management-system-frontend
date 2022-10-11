import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component';
import { ChatComponent } from './components/chat/chat.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { CreateMedicalCenterComponent } from './components/create-medical-center/create-medical-center.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
//import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MedicalCenterDetailsComponent } from './components/medical-center-details/medical-center-details.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { UpdateAppointmentComponent } from './components/update-appointment/update-appointment.component';
import { UpdateMedicalCenterComponent } from './components/update-medical-center/update-medical-center.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { UserComponent } from './components/user/user.component';
import { Appointment } from './models/appointment';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [


  // {path:'header', component:HeaderComponent},
  {path:'home', component:HomeComponent},
  {path:'admin', component:AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},
  
  // canActivate:[AuthGuard], data:{roles:['Admin']}
  
  {path:'user', component:UserComponent, canActivate:[AuthGuard], data:{roles:['User']}},
  {path:'login',component:LoginComponent},
  {path:'forbidden', component:ForbiddenComponent},
  {path:'create-account', component:CreateAccountComponent},
 {path:'students', component:StudentListComponent},
   {path:'create-student', component:CreateStudentComponent},
   {path:'update-student/:id',component:UpdateStudentComponent},
   {path:'medicalCenters',component:MedicalCenterDetailsComponent},
   {path:'update-medicalCenter/:id',component:UpdateMedicalCenterComponent},
   {path:'create-medicalCenter',component:CreateMedicalCenterComponent},
   {path:'appointments', component:AppointmentDetailsComponent},
   {path:'create-appointment', component:CreateAppointmentComponent},
   {path:'update-appointment/:id', component:UpdateAppointmentComponent},
   {path:'patients', component:PatientDetailsComponent},

   {path:'create-patient', component:CreatePatientComponent},
   {path:'update-patient/:id',component:UpdatePatientComponent},
   {path:'chat', component:ChatComponent}
 
 ,
   {path:'student-details/:id', component:StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }