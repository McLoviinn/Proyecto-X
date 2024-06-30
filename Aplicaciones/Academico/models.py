from django.db import models

class Empleado(models.Model):
    nombre = models.CharField(max_length=100)
    puesto = models.CharField(max_length=100)

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=10, decimal_places=2)

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField()
