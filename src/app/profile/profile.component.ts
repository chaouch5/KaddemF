import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../Services/etudiant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  nbEtudiant !:number;

  constructor(private etudiant : EtudiantService) { }

  ngOnInit(): void {
    // this.countEtudiant();
  }


  countEtudiant(){

    this.etudiant.getCountEtudiant().subscribe(
      (data:any)=>{
        this.nbEtudiant = data;
        //console.log(this.nbEtudiant);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur !!', 'Erreur dans la récupération des deonnées', 'error');
      }
    )
  };





}
