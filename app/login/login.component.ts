import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  firstname: string = '';
  lastname: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  login(){
    alert(' welcome you are loged in')
  }

}

