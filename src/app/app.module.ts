import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ListEtudiantComponent } from './Etudiant/list-etudiant/list-etudiant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { authInterceptorProviders } from './Services/auth.Interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddEtudiantComponent } from './Etudiant/add-etudiant/add-etudiant.component';
import { ProfileComponent } from './profile/profile.component';

import { ListEquipeComponent } from './equipe/list-equipe/list-equipe.component';
import { AddEquipeComponent } from './equipe/add-equipe/add-equipe.component';
import { UpdateEquipeComponent } from './equipe/update-equipe/update-equipe.component';
//import { AddEtudiantToEquipeContratComponent } from './etudiant/add-etudiant-to-equipe-contrat/add-etudiant-to-equipe-contrat.component';
import { UpdateEtudiantComponent } from './Etudiant/update-etudiant/update-etudiant.component';

import { ListDepartmentsComponent } from './departments/list-departments/list-departments.component';
import { AddDepartmentsComponent } from './departments/add-departments/add-departments.component';
import { DeleteDepartmentsComponent } from './departments/delete-departments/delete-departments.component';
import { UpdateDepartmentsComponent } from './departments/update-departments/update-departments.component';

import { AddContratComponent } from './contrat/add-contrat/add-contrat.component';
import { ListContratComponent } from './contrat/list-contrat/list-contrat.component';
import { ModifierContratComponent } from './contrat/modifier-contrat/modifier-contrat.component';

import { DatePipe } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    ContentComponent,
    ListEtudiantComponent,
    DashboardComponent,
    SidebarComponent,
    AddEtudiantComponent,
    ProfileComponent,
    ListEquipeComponent,
    AddEquipeComponent,
    UpdateEquipeComponent,
   // AddEtudiantToEquipeContratComponent,
    ListDepartmentsComponent,
    AddDepartmentsComponent,
    DeleteDepartmentsComponent,
    UpdateDepartmentsComponent,
    UpdateEtudiantComponent,
    AddContratComponent,
    //ListContratComponent,
    ModifierContratComponent,
    SearchComponent,
   



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders, DatePipe],
  bootstrap: [AppComponent],
 
  
  
})
export class AppModule { }
