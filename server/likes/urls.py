from django.urls import path

from .views import LikeDetail, LikeList

urlpatterns = [
    path('<int:pk>/', LikeDetail.as_view(), name='like_detail'), 
    path('', LikeList.as_view(), name='like_list'),
]