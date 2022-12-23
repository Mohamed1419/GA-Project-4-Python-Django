from rest_framework import serializers
from .models import Listing
from django.contrib.auth import get_user_model
# from tags.serializer import TagSerializer
# from tags.models import Tag

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('username',)


class ListingSerializer(serializers.ModelSerializer):
    def get_user(self, validated_data):
        author_data = validated_data.pop('author')
        return get_user_model().objects.get_or_create(author_data)
    
    author = AuthorSerializer()

    class Meta:
        model = Listing
        fields = ('id', 'movie_id', 'author', 'price', 'like_count',)

    def create(self, validated_data):
        discarded_user = validated_data.pop('author')
        author = self.context['request'].user
        # author_data = validated_data.pop("author")
        # (author, _) = get_user_model().objects.get_or_create(**author_data)
        # author_data = validated_data.pop('author')
        # price_data = validated_data.pop('price')
        # tags_data = validated_data.pop("tags") 
        # tags = []
        # for tag in tags_data:
        #     (newTag, _) = Tag.objects.get_or_create(name=tag)
        #     tags.append(newTag)
        # (author, _) = get_user_model().objects.get_or_create(author_data)
        # (price, _) = get_user_model().objects.get_or_create(**price_data)
        listing = Listing.objects.create(**validated_data, author=author,)
        return listing
