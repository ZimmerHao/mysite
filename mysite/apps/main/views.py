#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.shortcuts import get_list_or_404, get_object_or_404, render
from django.views import generic


class IndexView(generic.ListView):
    template_name = "main/index.html"

    def get_queryset(self):
        """Return the last five published questions."""
        return "aaa"








