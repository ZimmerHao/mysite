# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100, verbose_name=b'\xe4\xb9\xa6\xe5\x90\x8d', blank=True)),
                ('image', models.CharField(max_length=200, null=True, verbose_name=b'\xe5\x9b\xbe\xe7\x89\x87\xe8\xb7\xaf\xe5\xbe\x84', blank=True)),
                ('author', models.CharField(max_length=100, null=True, verbose_name=b'\xe4\xbd\x9c\xe8\x80\x85', blank=True)),
                ('publisher', models.CharField(max_length=100, null=True, verbose_name=b'\xe5\x87\xba\xe7\x89\x88\xe7\xa4\xbe', blank=True)),
                ('subhead', models.CharField(max_length=100, null=True, verbose_name=b'\xe5\x89\xaf\xe6\xa0\x87\xe9\xa2\x98', blank=True)),
                ('original_name', models.CharField(max_length=100, null=True, verbose_name=b'\xe5\x8e\x9f\xe8\x91\x97\xe5\x90\x8d', blank=True)),
                ('interpreter', models.CharField(max_length=100, null=True, verbose_name=b'\xe8\xaf\x91\xe8\x80\x85', blank=True)),
                ('published_year', models.DateField(null=True, verbose_name=b'\xe5\x87\xba\xe7\x89\x88\xe6\x97\xa5\xe6\x9c\x9f', blank=True)),
                ('page_count', models.IntegerField(null=True, verbose_name=b'\xe9\xa1\xb5\xe6\x95\xb0', blank=True)),
                ('price', models.CharField(max_length=100, null=True, verbose_name=b'\xe5\xae\x9a\xe4\xbb\xb7', blank=True)),
                ('binding', models.CharField(max_length=100, null=True, verbose_name=b'\xe8\xa3\x85\xe5\xb8\xa7', blank=True)),
                ('series', models.CharField(max_length=100, null=True, verbose_name=b'\xe4\xb8\x9b\xe4\xb9\xa6', blank=True)),
                ('isbn', models.BigIntegerField(null=True, verbose_name=b'ISBN', blank=True)),
                ('content_abstract', models.TextField(null=True, verbose_name=b'\xe5\x86\x85\xe5\xae\xb9\xe7\xae\x80\xe4\xbb\x8b', blank=True)),
                ('author_abstract', models.TextField(null=True, verbose_name=b'\xe4\xbd\x9c\xe8\x80\x85\xe7\xae\x80\xe4\xbb\x8b', blank=True)),
                ('created_date', models.DateTimeField(auto_now_add=True, verbose_name=b'\xe5\x88\x9b\xe5\xbb\xba\xe6\x97\xb6\xe9\x97\xb4', null=True)),
            ],
            options={
                'db_table': 'douban_book',
            },
        ),
    ]
