import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // this.authService.login(form.value.email, form.value.password);
  }
}
