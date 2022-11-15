from django.db import models

# Create your models here.
class Movie(models.Model):
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    ratingValue = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)
    datePublished = models.CharField(max_length=100)
    actor = models.CharField(max_length=100)
    director = models.CharField(max_length=100)