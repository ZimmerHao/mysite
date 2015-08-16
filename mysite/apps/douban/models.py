# -*- coding: utf-8 -*-

from django.db import models

# Create your models here.


class Book(models.Model):
    name = models.CharField(verbose_name='书名', max_length=100, blank=True, null=False)
    image = models.CharField(verbose_name='图片路径', max_length=200, blank=True, null=True)
    author = models.CharField(verbose_name='作者', max_length=100, blank=True, null=True)
    publisher = models.CharField(verbose_name='出版社', max_length=100, blank=True, null=True)
    subhead = models.CharField(verbose_name='副标题', max_length=100, blank=True, null=True)
    original_name = models.CharField(verbose_name='原著名', max_length=100, blank=True, null=True)
    interpreter = models.CharField(verbose_name='译者', max_length=100, blank=True, null=True)
    published_year = models.DateField(verbose_name='出版日期', blank=True, null=True)
    page_count = models.IntegerField(verbose_name='页数', blank=True, null=True)
    price = models.CharField(verbose_name='定价', max_length=100, blank=True, null=True)
    binding = models.CharField(verbose_name='装帧', max_length=100, blank=True, null=True)
    series = models.CharField(verbose_name='丛书', max_length=100, blank=True, null=True)
    isbn = models.BigIntegerField(verbose_name='ISBN', blank=True, null=True)
    content_abstract = models.TextField(verbose_name='内容简介', blank=True, null=True)
    author_abstract = models.TextField(verbose_name='作者简介', blank=True, null=True)
    created_date = models.DateTimeField(verbose_name="创建时间", blank=True, null=True, auto_now_add=True)

    class Meta:
        db_table = 'douban_book'
