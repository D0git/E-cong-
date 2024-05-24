import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  constructor(private http: HttpClient) { }

  AccepterDemande(id: number): void {
    // Vérifier si l'ID est valide
    if (typeof id === 'number' && id > 0) {
      // Effectuer les actions pour accepter la demande avec l'ID donné
      // Par exemple, vous pouvez envoyer une requête HTTP pour mettre à jour l'état de la demande dans une API

      const url = `http://127.0.0.1:8000/demande/accepter/${id}`;
      const requestBody = { etat: 'Acceptée' };

      this.http.put(url, requestBody).subscribe(
        () => {
          // La demande a été acceptée avec succès
          console.log('La demande a été acceptée.');
          // Effectuer d'autres actions ou mises à jour de l'interface utilisateur si nécessaire
        },
        error => {
          // Une erreur s'est produite lors de la tentative d'acceptation de la demande
          console.error('Erreur lors de l\'acceptation de la demande:', error);
        }
      );
    } else {
      console.error('ID de demande invalide.');
    }
  }
}
