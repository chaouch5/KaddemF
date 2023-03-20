import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratService } from 'src/app/Services/contrat.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifier-contrat',
  templateUrl: './modifier-contrat.component.html',
  styleUrls: ['./modifier-contrat.component.css']
})
export class ModifierContratComponent implements OnInit {
  id=0;
  cntr:any;
  
  
  constructor(private route:ActivatedRoute,private contrat : ContratService, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.contrat.getSingleContrat(this.id).subscribe(
      (data)=>{
        this.cntr = data;
        console.log(this.cntr);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  updateData(f:any){

    // alert('clicked');
    this.contrat.updateContrat(f).subscribe(
     (data)=>{
       Swal.fire('Success !!', 'Examen modifié avec succé', 'success').then((c)=>{
         this.router.navigate(['/dashboard/list-contrat']);
       });
     }
    )
   }

}
