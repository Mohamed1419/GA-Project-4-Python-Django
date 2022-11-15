from django.db import models
from django.conf import settings

# Create your models here.
class Model(models.Model):
    price = models.IntegerField
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    )