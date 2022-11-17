from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Like
from .serializers import LikeSerializer
# Create your views here.
from .permissions import IsAuthorOrReadOnly

class LikeList(generics.ListCreateAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )


class LikeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
    permission_classes = (IsAuthorOrReadOnly | permissions.IsAdminUser,)