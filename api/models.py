from django.db import models

# Create your models here.
class Valores(models.Model):
    id=models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, blank=True, default='')
    description = models.TextField()
    value = models.DecimalField(default=0, decimal_places=3, max_digits=150)
    pagar_em = models.DateField()
    parcelas =models.IntegerField(default=1)
    parcelas_pagas  =models.IntegerField(default=0)

