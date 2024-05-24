from django.db import models


class Congé(models.Model):
    id = models.AutoField(primary_key=True)
    Date_debut = models.DateField(null=False)
    Date_fin = models.DateField(null=False)
