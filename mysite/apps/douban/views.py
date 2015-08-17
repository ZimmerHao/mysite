# -*- coding: utf-8 -*-

from mysite.apps.douban.models import Book
from mysite.apps.douban.serializers import BookSerializer
from rest_framework import generics



class BookList(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer



class BookDetail(generics.RetrieveAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
