import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './Helpers';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private http : HttpClient) { }

  public getEquipes(){

    return this.http.get(`${baseUrl}/equipe`);
    

  }


  public addEquipe(equipe:any){

    return this.http.post(`${baseUrl}/equipe/add/`,equipe);


  }

  updateEquipe(equipe:any){

    return this.http.put(`${baseUrl}/equipe/update`, equipe);

  }

  deleteEquipe(id:any){

    return this.http.delete(`${baseUrl}/equipe/delete/${id}`);
  }



  getSingleEquipe(id:any){


    return this.http.get(`${baseUrl}/equipe/${id}`);

  }




}
