from django.contrib import admin

# Register your models here.
from .models import Disease, Field

admin.site.register([Disease, Field])
