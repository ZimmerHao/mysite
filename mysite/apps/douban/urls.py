__author__ = 'jinming'



from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from views import BookViewSet

book_list = BookViewSet.as_view({
    'get': 'list'
})

book_detail = BookViewSet.as_view({
    'get': 'retrieve'
})


urlpatterns = [
    url(r'^books/$', book_list, name='book_list'),
    url(r'^books/(?P<pk>[0-9]+)$', book_detail, name='book_detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)