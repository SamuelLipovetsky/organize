# Generated by Django 2.2.6 on 2019-10-04 16:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='dispesas',
            name='parcelas',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='rendimentos',
            name='parcelas',
            field=models.IntegerField(default=1),
        ),
    ]
