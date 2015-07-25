#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.shortcuts import get_list_or_404, get_object_or_404, render
import logging
from django.utils.log import RequireDebugTrue


mylogger = logging.getLogger('custom')

def index(request):
    latest_question_list = [{'id': 1, 'question_text': 'who am i'},
                            {'id': 2, 'question_text': 'where am i'}]
    context = {'latest_question_list': latest_question_list}
    mylogger.info('test in~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    return render(request, 'main/index.html', context)








