import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentsService } from 'src/app/Services/departments.service';
import { EtudiantService } from 'src/app/Services/etudiant.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {

  id=0;
  etud:any;
  departments : any = [];
  

  constructor(private route:ActivatedRoute,private etudiant : EtudiantService, private router : Router, private dept : DepartmentsService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.etudiant.getSingleEtudiant(this.id).subscribe(
      (data)=>{
        this.etud = data;
        console.log(this.etud);
      },
      (error)=>{
        console.log(error);
      }
    );

      this.dept.getDepartments().subscribe(
        (data:any)=>{
          this.departments = data;
        },
        (error)=>{
          alert('Erreur au cours de récupération des departements');
        }
      )

  }


  updateData(){
   // alert('clicked');
   this.etudiant.updateEtudiant(this.etud).subscribe(
    (data)=>{
      Swal.fire('Success !!', 'Etudiant modifié avec succé', 'success').then((e)=>{
        this.router.navigate(['/dashboard/list-etudiant']);
      });
    },
    (error)=>{
      Swal.fire('Error', 'Erreur de modification', 'error');
      console.log(error);
    }
   );
  }

}
