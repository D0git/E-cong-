# Generated by Django 4.2.5 on 2023-09-08 15:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Employe', '0002_rename_cin_employe_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employe',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
