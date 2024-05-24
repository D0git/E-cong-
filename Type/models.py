from django.db import models
from Congé.models import Congé


class Type(models.Model):
    id = models.AutoField(primary_key=True)
    Libelle = models.CharField(max_length=20,unique=True)
    Code_conge = models.ForeignKey(Congé,on_delete=models.CASCADE)
