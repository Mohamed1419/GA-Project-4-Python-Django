# Generated by Django 4.1.3 on 2022-11-17 20:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0003_listing_movie_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='listing',
            name='like_count',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='listing',
            name='movie_id',
            field=models.CharField(max_length=10, null=True, unique=True),
        ),
    ]
