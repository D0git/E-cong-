import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  constructor(private router: Router){}
  user = {
    username: '',
    password: ''
  };

  ngOnInit(){

  }

  isValidUser(): boolean {
    return this.user.username === 'Rajiahmed' && this.user.password === 'raji1';
  }
  submit(form: NgForm): void {
    if (this.isValidUser()) {
      localStorage.setItem('authToken', 'votre_token'); // Stockez le token d'authentification dans le localStorage
      this.router.navigate(['employes']);
    } else {
      alert('Erreur : informations d\'identification invalides');
    }
  }
  Submit(login:any){
    console.log("form",login)
  }
}
