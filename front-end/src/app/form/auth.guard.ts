import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Vérifiez ici si l'utilisateur est connecté
    const isLoggedIn = this.checkUserLoggedIn(); // Remplacez cette ligne par votre propre logique de vérification de connexion

    if (isLoggedIn) {
      return true; // Autorise l'accès à l'URL
    } else {
      this.router.navigate(['/login']); // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
      return false; // Bloque l'accès à l'URL
    }
  }

  private checkUserLoggedIn(): boolean {

      const authToken = localStorage.getItem('authToken'); // Récupère le token d'authentification depuis le localStorage

      // Vérifie si le token d'authentification est présent et valide
      if (authToken && authToken !== '') {
        // Dans cet exemple, on considère que tout token non vide est valide
        return true; // Utilisateur connecté
      } else {
        return false; // Utilisateur non connecté
      }
    }

}
