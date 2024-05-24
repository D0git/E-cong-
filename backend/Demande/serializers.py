from rest_framework import serializers
from Demande.models import Demande

class DemandeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Demande
        fields = '__all__'