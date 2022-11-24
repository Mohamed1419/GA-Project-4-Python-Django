from django.db import models
from django.contrib.auth.models import AbstractUser
from listings.models import Listing
from likes.models import Like

# Create your models here.
class CustomUser(AbstractUser):
    name = models.CharField(null=True, blank=True, max_length=100)
    # username = models.CharField(null=True, blank=True, max_length=50)

    # likes = 
    # listings = models.ForeignKey(Listing, null=True, blank=True, related_name='listings', on_delete = models.CASCADE)
    # likes = models.ForeignKey(Like, null=True, blank=True, related_name='likes', on_delete=models.CASCADE)