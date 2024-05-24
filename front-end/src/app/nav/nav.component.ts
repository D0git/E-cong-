import { Component,Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private router : Router){}


  logout(): void {
    // Supprimez le token d'authentification du localStorage ou effectuez toute autre action de déconnexion nécessaire
    localStorage.removeItem('authToken');
    // Redirigez l'utilisateur vers la page de connexion ou vers une autre page appropriée
    this.router.navigate(['/form']);
  }
}




