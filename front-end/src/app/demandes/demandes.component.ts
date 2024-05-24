// demandes.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeComponent } from '../employe/employe.component';
import { DemandeService } from 'src/service/demande-services.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})

export class DemandesComponent  {


  demandesTab: any[] = [];
  id:number[]=[];
  etat:string='';

  code_conge_id:number=0;
  Date_debut:string='';
  Date_fin:string='';

  constructor(private http: HttpClient, private emp: EmployeComponent,private demandeService: DemandeService) {

  }


  Afficher_dem_en_cours() {
    this.http.get("http://127.0.0.1:8000/demande/en_cours")
      .subscribe((resultData: any) => {
        console.log(resultData);
        this.demandesTab = resultData;
        this.emp.Nom = resultData[0].Nom;
        this.emp.Prenom = resultData[0].Prenom;
      });
  }

  Afficher_dem_acceptees() {
    this.http.get("http://127.0.0.1:8000/demande/acceptees")
      .subscribe((resultData: any) => {
        console.log(resultData);
        this.demandesTab = resultData;
      });
  }

  Afficher_dem_refusees() {
    this.http.get("http://127.0.0.1:8000/demande/refusees")
      .subscribe((resultData: any) => {
        console.log(resultData);
        this.demandesTab = resultData;
      });
  }



    Accepter_demande(demandeId: number) {
      const url = 'http://127.0.0.1:8000/demande/accepter-demande';
      const modifAccepte = { etat: 'Acceptée' };
      const modifRefuse = { etat: 'Refusée' };

      if (Number.isInteger(demandeId)) {
        const demandeUrl = `${url}/${demandeId}`;
        const modif = this.etat === 'accepter' ? modifAccepte : modifRefuse;

        this.http.put(demandeUrl, modif).subscribe(
          () => {
            this.Afficher_dem_acceptees();
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log("L'identifiant", demandeId, "n'est pas un entier valide.");
      }
    }

    Parcourir_demandes() {
      for (let i = 0; i < this.demandesTab.length; i++) {
        const demande = this.demandesTab[i];
        const demandeId = demande.id;

        this.Accepter_demande(demandeId);
        this.Refuser_demande(demandeId);
      }
    }



    Refuser_demande(demandeId: number) {
      const url = 'http://127.0.0.1:8000/demande/refuser-demande';
      const modifAccepte = { etat: 'Acceptée' };
      const modifRefuse = { etat: 'Refusée' };

      if (Number.isInteger(demandeId)) {
        const demandeUrl = `${url}/${demandeId}`;
        const modif = this.etat === 'refuser' ? modifAccepte : modifRefuse;

        this.http.put(demandeUrl, modif).subscribe(
          () => {
            this.Afficher_dem_refusees();
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log("L'identifiant", demandeId, "n'est pas un entier valide.");
      }
    }


}
