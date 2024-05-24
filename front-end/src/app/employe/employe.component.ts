import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent {
  employesTab : any[]=[];

    id : number=0;
    Nom :string='';
    Prenom :string='';
    Tel :string='';
    Email :string='';
    Adresse :string='';
    Salaire :number=0;
    Date_embauche :string='';
    Nom_utilisateur :string='';
    Mot_de_passe :string='';
    Sexe :string='';

    /*currentEmployeId=''*/
    Nomrecherche : string='';

  constructor(private http: HttpClient){
    this.Afficher_emp();

  }

  ngOnInit(){

  }

  Ajouter_emp() {
    // Vérifier si tous les champs requis sont remplis
    if (!this.Nom || !this.Prenom || !this.Tel || !this.Email || !this.Adresse ||
        !this.Salaire || !this.Date_embauche || !this.Nom_utilisateur || !this.Mot_de_passe || !this.Sexe) {
      Swal.fire("Veuillez remplir tous les champs");
      return; // Arrêter l'exécution de la fonction si des champs sont manquants
    }

    // Vérifier si le champ de l'email est valide
    if (!this.validateEmail(this.Email)) {
      Swal.fire("Veuillez entrer une adresse e-mail valide");
      return; // Arrêter l'exécution de la fonction si l'email est invalide
    }
    if (!this.validateEmbauche(this.Date_embauche)){
      Swal.fire('Date d\'embauche incorrecte');
      return;
    }
    if (!this.validateTel(this.Tel)){
      Swal.fire('Numéro de téléphone incorect \n Exemeple : 0600000000');
      return;
    }
    if (!this.validateSalaire(this.Salaire)) {
      Swal.fire('Salaire incorrecte \n 1000 < Salaire < 5000000');
      return;
    }
    // Effectuer la requête POST uniquement si toutes les vérifications ont réussi
    let bodyData = {
      "Nom": this.Nom,
      "Prenom": this.Prenom,
      "Tel": this.Tel,
      "Email": this.Email,
      "Adresse": this.Adresse,
      "Salaire": this.Salaire,
      "Date_embauche": this.Date_embauche,
      "Nom_utilisateur": this.Nom_utilisateur,
      "Mot_de_passe": this.Mot_de_passe,
      "Sexe": this.Sexe
    };

    this.http.post("http://127.0.0.1:8000/employe/ajouter/", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      Swal.fire("Employé ajouté avec succès");

      // Effectuer une requête GET pour récupérer l'employé nouvellement créé
      this.http.get("http://127.0.0.1:8000/employe/" + resultData.id + "/").subscribe((employe: any) => {
        this.employesTab.push(employe); // Ajouter l'employé à la liste employesTab
        this.Afficher_emp();
      });
    });
  }

  // Fonctions de validation des champs :
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validateTel(tel : string) : boolean {
    const telREgex = /^06\d{8}$/;
    return telREgex.test(tel);
  }

  validateSalaire(salaire : any) : boolean {
   return salaire>1000 && salaire<5000000;

  }

  validateEmbauche(Date_embauche : string) : boolean{
    const embauche = new Date(Date_embauche);
    const dateaujrdhui = new Date();
    if (embauche > dateaujrdhui ) {
      return false;
    }
    else
      return true;
  }



  Afficher_emp()  /*OUI*/
  {
    this.http.get("http://127.0.0.1:8000/employe/")
    .subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.employesTab = resultData;
    });
  }

  Modifier_emp(data: any)
  {
    this.id = data.id;
    this.Nom = data.Nom;
    this.Prenom = data.Prenom;
    this.Tel = data.Tel;
    this.Email = data.Email;
    this.Adresse = data.Adresse;
    this.Salaire = data.Salaire;
    this.Date_embauche = data.Date_embauche;
    this.Nom_utilisateur = data.Nom_utilisateur;
    this.Mot_de_passe = data.Mot_de_passe;
    this.Sexe = data.Sexe;

  }

  Modifier()
  {

    let bodyData =
    {
      "Nom" : this.Nom,
      "Prenom" : this.Prenom,
      "Tel" : this.Tel,
      "Email" : this.Email,
      "Adresse" : this.Adresse,
      "Salaire" : this.Salaire,
      "Date_embauche" : this.Date_embauche,
      "Nom_utilisateur" : this.Nom_utilisateur,
      "Mot_de_passe" : this.Mot_de_passe,
      "Sexe" : this.Sexe
    };

    this.http.put("http://127.0.0.1:8000/employe/modifier/"+ this.id +'/', bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        Swal.fire("Employé modifié avec succès")
        this.Nom = '';
        this.Prenom = '';
        this.Tel = '';
        this.Email = '';
        this.Adresse = '';
        this.Salaire = 0;
        this.Date_embauche = '';
        this.Nom_utilisateur = '';
        this.Mot_de_passe = '';
        this.Sexe = '';
        this.Afficher_emp();
    });
  }



  Supprimer_emp(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/employe/supprimer"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        Swal.fire('Supprimé ','','success')
        this.Afficher_emp();
    });
    let index = this.employesTab.indexOf(data);
    this.employesTab.splice(index,1);
  }

  Confirmer_supp(id:any){
    Swal.fire({
      icon: "warning",
      title: 'Voulez-vous supprimer cet employé?',
      showCancelButton: false,
      confirmButtonText: 'Oui',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.Supprimer_emp(id)
      } else if (result.isDenied) {
        Swal.fire("L'employé n'est pas supprimé")
      }
    })
  }

  Rechercher_emp(): void {
    const prenom = this.Prenom.charAt(0).toUpperCase() + this.Prenom.slice(1);
    const url = `http://127.0.0.1:8000/employe/${prenom}`;

    this.http.get(url).subscribe(
      (resultData: any) => {
        console.log('La méthode est appelée');
        console.log(resultData);

        if (Array.isArray(resultData)) {
          this.employesTab = resultData.filter(employe => employe.Prenom === prenom);
          if (this.employesTab.length === 0) {
            Swal.fire("Aucun employé trouvé\nVérifiez le prénom");
          }
        } else {
          Swal.fire("Aucun employé trouvé\nVérifiez le prénom");
        }
      },
      (error: any) => {
        console.error('Erreur lors de la recherche d\'employé', error);
        // Gérer l'erreur de recherche ici (afficher un message d'erreur, etc.)
      }
    );
  }

}
