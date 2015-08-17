# -*- coding: utf-8 -*-

from mysite.apps.douban.models import Book
from mysite.apps.douban.serializers import BookSerializer
from rest_framework import viewsets



class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

