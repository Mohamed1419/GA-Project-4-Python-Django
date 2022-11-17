from django.db import models
from django.conf import settings

# Create your models here.
class Like(models.Model):
    movie_id = models.CharField(null=True, blank=True, max_length=10)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.movie_id} is liked by {self.author}'