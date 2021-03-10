"""
WSGI config for healthApp project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
from diseases.models import Disease, Field

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'healthApp.settings')

application = get_wsgi_application()

Disease.objects.all().delete()
Field.objects.all().delete()

#load disease fixtures
heart_disease = Disease(name="Heart", description="dangerous disease", image="kkkk")
heart_disease.save()
liver_disease = Disease(name="Liver", description="dangerous disease", image="kkkk")
liver_disease.save()
kidney_disease = Disease(name="Kidney", description="dangerous disease", image="kkkk")
kidney_disease.save()
breast_cancer_disease = Disease(name="Breast Cancer", description="dangerous disease", image="kkkk")
breast_cancer_disease.save()
diabetes_disease = Disease(name="Diabetes", description="dangerous disease", image="kkkk")
diabetes_disease.save()

Field.objects.create(type="number", label="Total Bilirubin", value="", disease= liver_disease)
Field.objects.create(type="number", label="Direct Bilirubin", value="", disease= liver_disease)
Field.objects.create(type="number", label="Alkaline Phosphotase", value="", disease= liver_disease)
Field.objects.create(type="number", label="Alamine Aminotransferase", value="", disease= liver_disease)
Field.objects.create(type="number", label="Total Protiens", value="", disease= liver_disease)
Field.objects.create(type="number", label="Albumin", value="", disease= liver_disease)
Field.objects.create(type="number", label="Albumin and Globulin Ratio", value="", disease= liver_disease)

Field.objects.create(type="radio",  label="Chest Pain Type",
value="", select_options="Typical Angina, Atypical Angina, Non-Anginal Pain, Asymptomatic", disease= heart_disease)
Field.objects.create(type="number", label="Resting Blood Pressure (in mm Hg)", value="", disease= heart_disease)
Field.objects.create(type="number", label="Serum Cholestoral in mg/dl", value="", disease= heart_disease)
Field.objects.create(type="radio",  label="Fasting Blood Sugar", value="",
select_options="Fasting Blood Sugar < 120 mg/dl, Fasting Blood Sugar > 120 mg/dl", disease= heart_disease)
Field.objects.create(type="radio",  label="Resting Electro-cardiographic Result", value="",
select_options="Normal, having ST-T wave abnormality, showing probable or definite left ventricular hypertrophy", 
disease= heart_disease)
Field.objects.create(type="number", label="Maximum Heart Rate Achieved", value="", disease= heart_disease)
Field.objects.create(type="radio", label="Exercise Induced Angina", value="", select_options="Yes, No", disease= heart_disease)


Field.objects.create(type="number", label="Blood Pressure", value="", disease= kidney_disease)
Field.objects.create(type="number", label="Specific Gravity", value="", disease= kidney_disease)
Field.objects.create(type="number", label="Albumin", value="", disease= kidney_disease)
Field.objects.create(type="number", label="Blood Sugar Level", value="", disease= kidney_disease)
Field.objects.create(type="number", label="Red Blood Cells Count", value="", disease= kidney_disease)
Field.objects.create(type="number", label="Pus Cell Count", value="", disease= kidney_disease)
Field.objects.create(type="number", label="Pus Cell Clump", value="", disease= kidney_disease)

Field.objects.create(type="number", label="No. of Pregnencies", value="", disease= diabetes_disease)
Field.objects.create(type="number", label="Glucose Level", value="", disease= diabetes_disease)
Field.objects.create(type="number", label="Current Blood Pressure", value="", disease= diabetes_disease)
Field.objects.create(type="number", label="Enter the Body Mass Index", value="", disease= diabetes_disease)
Field.objects.create(type="number", label="Diabetes Pedigree Function", value="", disease= diabetes_disease)
Field.objects.create(type="number", label="Age", value="", disease= diabetes_disease)

Field.objects.create(type="number", label="Mean of the Concave Points", value="", disease= breast_cancer_disease)
Field.objects.create(type="number", label="Mean of the Area", value="", disease= breast_cancer_disease)
Field.objects.create(type="number", label="Mean of the Radius", value="", disease= breast_cancer_disease)
Field.objects.create(type="number", label="Mean of the Perimeters", value="", disease= breast_cancer_disease)
Field.objects.create(type="number", label="Mean of the Concavity", value="", disease= breast_cancer_disease)
