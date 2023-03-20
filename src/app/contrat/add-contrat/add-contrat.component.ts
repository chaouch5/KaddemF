import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/Services/contrat.service';
import { EtudiantService } from 'src/app/Services/etudiant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {

  ContratData={
    dateDebutContrat:'',
    dateFinContrat:'',
    specialite:'',
    archive:'',
    etudiant:{
      id:'',
    },
  };

  etudiants:any=[];


  constructor(private contrat:ContratService, private etudiant : EtudiantService) { }

  ngOnInit(): void {

  this.etudiant.getEtudiant().subscribe(
    (data)=>{
      this.etudiants = data;
      console.log(this.etudiants);
    },
    (error)=>{
      console.log(error);
    }
  )


  }


  
  addContrat(){

    //console.log(this.etudiantData);

    if(this.ContratData.dateDebutContrat.trim() == '' || this.ContratData.dateFinContrat.trim() == ''){
      //Swal.fire('Succé', 'Examen ajouté avec succé', 'success');
    }


   // console.log(this.ContratData.dateDebutContrat);

    this.contrat.addContrat(this.ContratData).subscribe(
      (data:any)=>{
        
        Swal.fire('Succé', 'contrat ajouté avec succé', 'success');
      },
      (error)=>{
        Swal.fire('Erreur !', 'Erreur de cette opération', 'error');
        console.log(error);
      }
      );




  }




}
