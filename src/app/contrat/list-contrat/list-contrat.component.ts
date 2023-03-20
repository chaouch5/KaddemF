import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/Services/contrat.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {

  Contrats : any=[];
  searchText:string='';
  

  totalLength:any;
  page:number = 1;

  ContratData={
    id:'',
    dateDebutContrat:'',
    dateFinContrat:'',
    specialite:'',
    archive:'',
    etudiant:{
      id:'',
    },
  };

  ContratData1={
    id:'',
    dateDebutContrat:'',
    dateFinContrat:'',
    specialite:'',
    archive:'',
    etudiant:{
      id:'',
    },
  };



  constructor(private contrat:ContratService) { }

  ngOnInit(): void {
    this.getListContrat();
  }

  getListContrat(){
    this.contrat.getContrat().subscribe(
      (data:any)=>{
        this.Contrats = data;
        console.log(this.Contrats);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur !!', 'Erreur dans la récupération des deonnées', 'error');
      }
    )
  }



  details(cnt:any){
    this.ContratData = cnt;
  }



  deleteContrat(id:any){
    
    Swal.fire({
      icon : 'info',
      title : 'Vous-ètes sùr ?',
      confirmButtonText : 'Supprimer',
      showCancelButton : true,
     }).then((result)=>{
      if(result.isConfirmed){
        this.contrat.deleteContrat(id).subscribe(
          (data)=>{
           
            Swal.fire('Succé', 'Etudiant supprimée avec succé', 'success'); 
            window.location.reload();
          },
          
          (error)=>{
            Swal.fire('Erreur', 'Erreur de suppression', 'error');
    
          }
        );
        
      }
     });

    }
  
select_contrat(contrat : any){
  console.log(contrat)
  this.ContratData1 = contrat;
  console.log(this.ContratData1)
}

onSearchTextChanged(searchValue:string){

  this.searchText = searchValue;
  console.log(this.searchText);
}


}
