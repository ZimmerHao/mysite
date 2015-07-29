from django.db import models

# Create your models here.


class Book(models.Model):
    name = models.CharField(verbose_name=_('name'), blank=True, null=True)

