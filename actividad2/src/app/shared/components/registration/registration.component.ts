import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass'],  
})

export class RegistrationComponent implements OnInit {
    estado: String;
    Guatemala = ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso"];
    Belize = ["Belize", "Cayo", "Corozal", "Orange Walk", "Stann Creek", "Toledo"];
    ElSalvador = ["Ahuachapan", "Cabanas", "Cuscatlan", "La Libertad", "Chalatenango"];
    Honduras = ["Atlantida", "Choluteca", "Colon", "Comayagua"];
    Nicaragua = ["Boaco", "Carazo", "Chinandega", "Chontales"];
    CostaRica = ["Alajuela", "Cartago", "Guanacaste", "Heredia"];
    Panama = ["Bocas Del Toro", "Chiriqui", "Cocle", "Colon"];
    Ecuador = ["Azuay", "Bolivar", "Canar", "Carchi"];
    Paraguay = ["Concepcion", "San Pedro", "Cordillera", "Guaira"];
    Uruguay = ["Artigas", "Canelones", "Cerro Largo", "Colonia"];
  
  btnRegisterOnClick(email, pwd)
  {
    alert("Password: " + pwd + "\nEmail: " + email + "\n\nRegistration successful");
  }
  constructor() { }

  ngOnInit() {
  }

}
