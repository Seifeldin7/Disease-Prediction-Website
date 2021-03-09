from django.urls import path
from diseases import views
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('predict/', views.PredictView.as_view()),
    path('diseases/', views.DiseaseView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
