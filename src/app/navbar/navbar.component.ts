import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public login:LoginService) { }

  ngOnInit(): void {
  }


  logout(){
    this.login.logout();
    window.location.reload();
  }



}
