from django.db import models
from Employe.models import Employe
from Congé.models import Congé


class Demande(models.Model):

    EN_COURS = 'En cours'
    ACCEPTEE = 'Acceptée'
    REFUSEE = 'Refusée'

    ETAT_CHOICES = (
        (EN_COURS, 'En cours'),
        (ACCEPTEE, 'Acceptée'), 
        (REFUSEE, 'Refusée'),
    )

    id = models.AutoField(primary_key=True)
    etat = models.CharField(max_length=20, choices=ETAT_CHOICES,null=False)
    CIN = models.ForeignKey(Employe, on_delete=models.CASCADE,null=False)
    code_conge = models.ForeignKey(Congé, on_delete=models.CASCADE,null=False)