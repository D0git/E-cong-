from django.db import models
from Demande.models import Demande
class Etat(models.Model):


    id = models.AutoField(primary_key=True)
    nomEtat = models.CharField(max_length=20, null=False)
    Demande = models.ForeignKey(Demande, on_delete=models.CASCADE,null=False)
  