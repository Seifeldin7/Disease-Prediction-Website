from rest_framework import serializers
from .models import Disease, Field

class DiseaseSerializer (serializers.ModelSerializer):
    class Meta:
        model= Disease
        fields = '__all__'

class FieldSerializer (serializers.ModelSerializer):
    class Meta:
        model= Field
        fields = '__all__'
        