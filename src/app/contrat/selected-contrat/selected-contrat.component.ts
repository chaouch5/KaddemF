import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-contrat',
  templateUrl: './selected-contrat.component.html',
  styleUrls: ['./selected-contrat.component.css']
})
export class SelectedContratComponent implements OnInit {

  @Input("contrat")contrat :any;
  constructor() { }

  ngOnInit(): void {
  }

}
