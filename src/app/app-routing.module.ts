import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';
import { FindDocumentComponent } from './find-document/find-document.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { AddNewDocumentComponent } from './add-new-document/add-new-document.component';
import { FilemanagementComponent } from './filemanagement/filemanagement.component';


const routes: Routes = [
  {path:'home', component:HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'feature', component:FeatureComponent},
  {path: 'admin' ,component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'filemanagement', component: FilemanagementComponent},
  {path: 'login', component: LoginComponent},
  {path:'finddoc', component:FindDocumentComponent}, 
  {path:'addNewDoc', component: AddNewDocumentComponent},
  {path: '**', component: ErrorComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

