from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=255)


class Product(models.Model):
    name = models.CharField(max_length=250)
    price = models.IntegerField(default=0)
    category = models.ForeignKey(
    Category, on_delete=models.CASCADE, null=True, blank=True)
