# Generated by Django 4.2.5 on 2023-09-16 12:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Employe', '0005_alter_employe_adresse_alter_employe_email_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employe',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
