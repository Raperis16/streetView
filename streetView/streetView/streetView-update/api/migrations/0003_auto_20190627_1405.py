# Generated by Django 2.2.2 on 2019-06-27 11:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20190619_1526'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='Fake1',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Fake1', to='api.Random'),
        ),
        migrations.AlterField(
            model_name='game',
            name='Fake2',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Fake2', to='api.Random'),
        ),
        migrations.AlterField(
            model_name='game',
            name='Fake3',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Fake3', to='api.Random'),
        ),
    ]
