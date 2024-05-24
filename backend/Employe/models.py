from django.db import models

# Create your models here.


class Employe(models.Model):
    id = models.AutoField(primary_key=True)
    Nom = models.CharField(max_length=50,null=False)
    Prenom = models.CharField(max_length=50,null=False)
    Tel = models.CharField(max_length=10,unique=True,null=False)
    Email = models.EmailField(unique=True,null=False)
    Adresse = models.CharField(max_length=100,unique=True,null=False)
    Salaire = models.DecimalField(max_digits=8, decimal_places=2,null=False)
    Date_embauche = models.DateField(null=False)
    Nom_utilisateur = models.CharField(max_length=50,unique=True,null=False)
    Mot_de_passe = models.CharField(max_length=50,unique=True,null=False)
    Sexe = models.CharField(max_length=1, choices=[('M', 'Masculin'),('F', 'Féminin')]
)

//
