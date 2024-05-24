from rest_framework import serializers
from Congé.models import Congé

class CongéSerializer(serializers.ModelSerializer):
    class Meta:
        model = Congé
        fields = '__all__'