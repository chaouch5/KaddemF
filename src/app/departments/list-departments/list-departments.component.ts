import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/Services/departments.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-departments',
  templateUrl: './list-departments.component.html',
  styleUrls: ['./list-departments.component.css']
})
export class ListDepartmentsComponent implements OnInit {

  departments : any=[];
  departmentData={
    id:'',
    nomDepartment:'',
  };
  constructor(private department:DepartmentsService) { }

  ngOnInit(): void {
    this.getListDepartments();
  }

  getListDepartments(){
    this.department.getDepartments().subscribe(
      (data:any)=>{
        this.departments = data;
        console.log(this.departments);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur !!', 'Erreur dans la récupération des données', 'error');
      }
    )
  }

   details(departments:any){
    this.departmentData = departments;
  }

  deleteDepartment(id:any){
    
    Swal.fire({
      icon : 'info',
      title : 'Vous-ètes sùr ?',
      confirmButtonText : 'Supprimer',
      showCancelButton : true,
     }).then((result)=>{
      if(result.isConfirmed){
        this.department.deleteDepartment(id).subscribe(
          (data)=>{
           
            Swal.fire('Succé', 'Department supprimée avec succé', 'success'); 
            window.location.reload();
          },
          
          (error)=>{
            Swal.fire('Erreur', 'Erreur de suppression', 'error');
    
          }
        );
        
      }
     });

    }


}
