from django.shortcuts import render
from django.shortcuts import render
from .models import Valores
from .serializers import CashSerializer
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.response import Response


# Create your views here.
class CashViewSet (viewsets.ModelViewSet):
    queryset = Valores.objects.all()
    serializer_class = CashSerializer
