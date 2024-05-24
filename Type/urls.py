from django.urls import path
from Type import views


urlpatterns = [
    path('type/',views.typeApi,name="Type"),
    path('type/<int:id>/', views.typeApi,name="Type_modif")
    ]