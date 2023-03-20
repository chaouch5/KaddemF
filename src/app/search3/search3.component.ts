import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search3',
  templateUrl: './search3.component.html',
  styleUrls: ['./search3.component.css']
})
export class Search3Component implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }


  entredSearchValue:string='';

  @Output()
  searchTextChanged : EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.entredSearchValue)
  }
}
