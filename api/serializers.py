from rest_framework import serializers
from .models import Valores
from django.utils import timezone

class CashSerializer(serializers.ModelSerializer):
    class Meta:
        model = Valores
        fields = '__all__'