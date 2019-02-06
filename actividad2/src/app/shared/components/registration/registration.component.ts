import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {
  
  btnRegisterOnClick(user, pwd, email)
  {
    alert("User: " + user + "\nPassword: " + pwd + "\nEmail: " + email + "\n\nRegistration successful");
  }
  constructor() { }

  ngOnInit() {
  }

}
