import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentsService } from 'src/app/Services/departments.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-departments',
  templateUrl: './update-departments.component.html',
  styleUrls: ['./update-departments.component.css']
})
export class UpdateDepartmentsComponent implements OnInit {
  id=0;
  dept:any;
  constructor(private route:ActivatedRoute,private department : DepartmentsService, private router : Router) { }
  departmentData={
    nomDepartment:'',
    universite:null,
  };
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.department.getDepartment(this.id).subscribe(
      (data)=>{
        this.dept = data;
        console.log(this.dept);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  updateData(){
    console.log("update");
    console.log(this.dept);
   // alert('clicked');
   this.department.updateDepartment(this.dept).subscribe(
    
    (data)=>{
      Swal.fire('Success !!', 'Departments modifié avec succé', 'success').then((e)=>{
        this.router.navigate(['/dashboard/list-department']);
      });
    }
   )
  }

}
