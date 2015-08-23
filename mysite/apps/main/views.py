#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.shortcuts import get_list_or_404, get_object_or_404, render
import logging
from django.utils.log import RequireDebugTrue
from django.views.generic import TemplateView


mylogger = logging.getLogger('django.request')

# def index(request):
#     latest_question_list = [{'id': 1, 'question_text': 'who am i'},
#                             {'id': 2, 'question_text': 'where am i'}]
#     context = {'latest_question_list': latest_question_list}
#     mylogger.info('test in~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
#     return render(request, 'main/index.html', context)


class HomeView(TemplateView):
    template_name = 'main/index.html'

    def get(self, request, *args, **kwargs):
        return super(HomeView, self).get(request, *args, **kwargs)








