import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListContratRoutingModule } from './list-contrat-routing.module';
import { ListContratComponent } from './list-contrat.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { SelectedContratComponent } from '../selected-contrat/selected-contrat.component';
import { Search3Component } from 'src/app/search3/search3.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListContratComponent, SelectedContratComponent, Search3Component],
  imports: [
    CommonModule,
    ListContratRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    
  
  ]
})
export class ListContratModule { }
