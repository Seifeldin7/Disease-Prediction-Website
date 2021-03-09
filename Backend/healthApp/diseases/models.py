from django.db import models

# Create your models here.

class Disease(models.Model):
    '''
    The Disease object represents Disease API endpoint.

    Attributes:
        name: The name of the endpoint, it will be used in API URL,
        description: The string with description,
        image: The disease image,
        created_at: The date when endpoint was created.
    '''
    name = models.CharField(max_length=128)
    description = models.CharField(max_length=300)
    image = models.FileField()
    created_at = models.DateTimeField(auto_now_add=True, blank=True)

class Field(models.Model):
    '''
    Attributes:
        type: The field type,
        label: The field name,
        value: The field value,
    '''
    type = models.CharField(max_length=128)
    label = models.CharField(max_length=128)
    value = models.CharField(max_length=128)
    disease = models.ForeignKey(Disease, on_delete=models.CASCADE)
    