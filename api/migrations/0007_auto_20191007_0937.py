# Generated by Django 2.2.6 on 2019-10-07 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_valores_parcelas_pagas'),
    ]

    operations = [
        migrations.AlterField(
            model_name='valores',
            name='parcelas_pagas',
            field=models.IntegerField(default=0),
        ),
    ]
