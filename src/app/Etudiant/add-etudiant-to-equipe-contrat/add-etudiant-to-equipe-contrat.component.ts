import { Component, OnInit } from '@angular/core';
import {EtudiantService} from "../../Services/etudiant.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-etudiant-to-equipe-contrat',
  templateUrl: './add-etudiant-to-equipe-contrat.component.html',
  styleUrls: ['./add-etudiant-to-equipe-contrat.component.css']
})
export class AddEtudiantToEquipeContratComponent implements OnInit {

  etudiantData={
    nom:'',
    prenom:'',
    opt:''
  };




  constructor(private etudiant:EtudiantService) { }

  ngOnInit(): void {
  }



  addEtudiantToEquipe(){
    this.etudiant.addEtudiantAndAssignToEquipeContrat(this.etudiantData,1, 1).subscribe(
      (data:any)=>{
        Swal.fire('Succé', 'Etudiant ajouté avec succé', 'success');
      },
      (error)=>{
        Swal.fire('Erreur !', 'Erreur de cette opération', 'error');
        console.log(error);
      }
    );




  }

}
