import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './Helpers';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

    constructor(private http : HttpClient) { }

    public getContrat(){
  
      return this.http.get(`${baseUrl}/contrat`);
      
  
    }
  
  
    public addContrat(contrat:any){
  
      return this.http.post(`${baseUrl}/contrat/add/`,contrat);
  
  
    }

    getCountContrat(){

      return this.http.get(`${baseUrl}/contrat/count`);
  
  
    }
  
  
    updateContrat(contrat:any){
  
      return this.http.put(`${baseUrl}/contrat/update`, contrat);
  
    }
  
    deleteContrat(id:any){
  
      return this.http.delete(`${baseUrl}/contrat/delete/${id}`);
    }
  
  
  
    getSingleContrat(id:any){
  
  
      return this.http.get(`${baseUrl}/contrat/${id}`);
  
    }
  

}