# Generated by Django 4.1.3 on 2022-11-28 05:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0004_listing_like_count_alter_listing_movie_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='movie_id',
            field=models.CharField(max_length=10, null=True),
        ),
    ]
