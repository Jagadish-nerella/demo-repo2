from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import View

# Create your views here.


class HomeView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "index.html", {})


def get_data(request, *args, **kwargs):
    data = {
        "Item1": 100,
        "Item2": 200,
        "Item3": 300,
        "Item4": 400,
        "Item5": 500,
        "Item6": 600,
    }
    return JsonResponse(data)
