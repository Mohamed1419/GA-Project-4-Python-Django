from rest_framework import serializers
from .models import Like
from django.contrib.auth import get_user_model
from listings.serializers import AuthorSerializer


# class AuthorSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = get_user_model()
#         fields = ('username',)


class LikeSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    # tags = TagSerializer(many=True)

    class Meta:
        model = Like
        fields = ('id', 'movie_id', 'author',)

    def create(self, validated_data):
        author_data = validated_data.pop('author')
        # tags_data = validated_data.pop("tags") 
        # tags = []
        # for tag in tags_data:
        #     (newTag, _) = Tag.objects.get_or_create(name=tag)
        #     tags.append(newTag)
        (author, _) = get_user_model().objects.get_or_create(**author_data)
        # like = Like.objects.create(**validated_data, author=author, tags=tags)
        like = Like.objects.create(**validated_data, author=author)
        return like

