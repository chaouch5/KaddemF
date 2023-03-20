import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentsService } from 'src/app/Services/departments.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {

  departmentData={
    nomDepartment:'',
  };

  constructor(private department:DepartmentsService,private router : Router) { }

  ngOnInit(): void {
  }

  addDepartment(){


    this.department.addDepartment(this.departmentData).subscribe(
      (data:any)=>{
        Swal.fire('Succé', 'Department ajouté avec succé', 'success');
        this.router.navigate(['/dashboard/list-department']);
      },
      (error)=>{
        Swal.fire('Erreur !', 'Erreur de cette opération', 'error');
        console.log(error);
    
      }
      );




  }

}
