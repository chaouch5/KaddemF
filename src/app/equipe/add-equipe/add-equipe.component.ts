import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DetailsEquipe } from 'src/app/Models/DetailsEquipe';
import { Equipe } from 'src/app/Models/Equipe';
import { EquipeService } from 'src/app/Services/equipe-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
  equipe : Equipe = new Equipe();
  myForm: any;
  nom_validated: any;
  niveau_validated: any;
  equipeData={
    nomEquipe:'',
    niveau:'',
  };




  constructor(private equipeService:EquipeService) { }

  ngOnInit(): void {

    let myEquipe = new Equipe();
    let myDetailEquipe = new DetailsEquipe();
    this.myForm=new FormGroup({
      nomEquipe:new FormControl(myEquipe.nomEquipe, [Validators.required, Validators.minLength(4)]),
      niveau:new FormControl(myEquipe.niveau, Validators.required),
      details: new FormGroup({
        salle: new FormControl(myDetailEquipe.salle),
        thematique: new FormControl(myDetailEquipe.thematique)
      })
    });

    
    this.nom_validated = true;
    this.niveau_validated = true;

  }

  get nomE(){
    return this.myForm.get('nomEquipe');
  }

  get niveau(){
    return this.myForm.get('niveau');
  }


  addEquipe(){

    //console.log(this.etudiantData);

    // if(this.equipeData1.nomEquipe.trim() == '' || this.equipeData1.niveau.trim() == ''){
    //   //Swal.fire('Succé', 'Examen ajouté avec succé', 'success');
    // }

    this.equipe.nomEquipe=  this.myForm.get('nomEquipe').value;
    this.equipe.niveau=  this.myForm.get('niveau').value;
    this.nom_validated = true;
    this.niveau_validated = true;
    if(this.myForm.valid){
      this.equipeService.addEquipe(this.equipe).subscribe(
        (data:any)=>{
          Swal.fire('Succé', 'Etudiant ajouté avec succé', 'success');
        },
        (error)=>{
          Swal.fire('Erreur !', 'Erreur de cette opération', 'error');
          console.log(error);
        }
        );
    }
    else{
      if(this.myForm.get('niveau').invalid){
        this.niveau_validated = false;
      }
      if(this.myForm.get("nomEquipe").invalid){
        this.nom_validated = false;
      }
      
    }

    




  }

}
