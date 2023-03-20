import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEtudiantComponent } from './Etudiant/add-etudiant/add-etudiant.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDepartmentsComponent } from './departments/add-departments/add-departments.component';
import { ListDepartmentsComponent } from './departments/list-departments/list-departments.component';
import { UpdateDepartmentsComponent } from './departments/update-departments/update-departments.component';
import { AddEquipeComponent } from './equipe/add-equipe/add-equipe.component';
import { AddContratComponent } from './contrat/add-contrat/add-contrat.component';
import { ListEquipeComponent } from './equipe/list-equipe/list-equipe.component';
import { ListEtudiantComponent } from './Etudiant/list-etudiant/list-etudiant.component';
import { ListContratComponent } from './contrat/list-contrat/list-contrat.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserGuard } from './Services/user.guard';

//import {AddEtudiantToEquipeContratComponent} from "./etudiant/add-etudiant-to-equipe-contrat/add-etudiant-to-equipe-contrat.component";

import { UpdateEtudiantComponent } from './Etudiant/update-etudiant/update-etudiant.component';
import { UpdateEquipeComponent } from './equipe/update-equipe/update-equipe.component';
import { ModifierContratComponent } from './contrat/modifier-contrat/modifier-contrat.component';


const routes: Routes = [
  {path: '', component:ContentComponent},
  {path : 'login', component:LoginComponent},
  {path : 'dashboard', component:DashboardComponent, canActivate:[UserGuard],
    children:[
         { path:'list-etudiant',component: ListEtudiantComponent},
       //  { path:'list-contrat',component: ListContratComponent},
       {path:'list-contrat',loadChildren:()=>import('./contrat/list-contrat/list-contrat.module').then(m=>m.ListContratModule)},
         {path:'add-etudiant', component:AddEtudiantComponent},

         {path:'profile', component:ProfileComponent},

         { path:'list-equipe',component: ListEquipeComponent},
         { path:'add-equipe',component: AddEquipeComponent},
       //  {path:'add-etudiant', component:AddEtudiantComponent},
         { path:'add-department',component: AddDepartmentsComponent},
         {path:'list-department', component:ListDepartmentsComponent},
         { path:'update-department/:id', component:UpdateDepartmentsComponent},

         { path:'update-etudiant/:id', component:UpdateEtudiantComponent},
         {path:'profile', component:ProfileComponent},
         {path:'add-contrat', component:AddContratComponent},


         { path:'list-equipe',component: ListEquipeComponent},
        // { path:'add-equipe',component: AddEquipeComponent},
         { path:'update-equipe/:id', component:UpdateEquipeComponent},
         { path:'modifier-contrat/:id', component:ModifierContratComponent},
       //  {path:'add-etudiant', component:AddEtudiantComponent},
        // {path:'add-etudiant-to-equipe-contrat', component:AddEtudiantToEquipeContratComponent}
        ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
