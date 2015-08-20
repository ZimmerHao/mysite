# -*- coding: utf-8 -*-

__author__ = 'jinming'


from rest_framework import serializers
from models import Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'name', 'author', 'image', 'price')

