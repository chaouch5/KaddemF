import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EtudiantService } from 'src/app/Services/etudiant.service';
import { DepartmentsService } from 'src/app/Services/departments.service';


@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  etudiantData={
    nom:'',
    prenom:'',
    opt:'',
    departement:
    {
      id:'',
    }
  };


  departments:any=[];


  constructor(private etudiant:EtudiantService, private dept : DepartmentsService) { }

  ngOnInit(): void {

    this.dept.getDepartments().subscribe(
      (data)=>{
        this.departments = data;
        console.log(this.departments);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur','Erreur récuperation de données', 'error');
      }
    )

  }



  addEtudiant(){

    //console.log(this.etudiantData);

    if(this.etudiantData.nom.trim() == '' || this.etudiantData.prenom.trim() == ''){
      Swal.fire('Erreur !', 'Erreur les valeur sont', 'error');
    }

    this.etudiant.addEtudiant(this.etudiantData).subscribe(
      (data:any)=>{
      
        Swal.fire('Succès', 'Etudiant ajouté avec succé', 'success');
        
        console.log(data);



      },
      (error)=>{
        Swal.fire('Erreur !', 'Erreur de cette opération', 'error');
        console.log(error);
      }
      );


      


  }



}
