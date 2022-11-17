from django.db import models
from django.conf import settings

# Create your models here.
class Listing(models.Model):
    price = models.DecimalField(max_digits=6, decimal_places=2)
    movie_id = models.CharField(null=True, blank=True, max_length=10)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    )
    like_count = models.IntegerField()

    def __str__(self):
        return f'{self.author} - {self.price}'