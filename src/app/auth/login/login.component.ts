import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private router: Router){

  }
  ngOnInit(): void {
    
  }
  onLogin(){
    location.href="http://localhost:4200/dashboard"
  }
}