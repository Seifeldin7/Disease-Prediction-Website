from django.shortcuts import render
from .serializers import DiseaseSerializer
from .models import Disease, Field
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from ML.classifier import Classifier
import json
# Create your views here.
# A Class View That Return All The Diseases

class DiseaseView (APIView):
    #View all diseases
    def get(self,request):
        try:
            diseases= Disease.objects.all()
            serializer= DiseaseSerializer(diseases, many= True)
            return Response(serializer.data)
        except Exception as ex:
            return Response({"msg":"An error has happened"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class PredictView (APIView):
    def post(self,request):
        try:
            disease= self.request.query_params.get('disease')
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            predict_list = list(body.values())
            classifier = Classifier(predict_list, disease)
            prediction = classifier.predict()
            return Response(prediction)
        except Exception as ex:
            return Response({"msg":"An error has happened"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)