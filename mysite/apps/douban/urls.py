__author__ = 'jinming'



from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from views import BookList, BookDetail

urlpatterns = [
    url(r'^books/$', BookList.as_view()),
    url(r'^books/(?P<pk>[0-9]+)$', BookDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)