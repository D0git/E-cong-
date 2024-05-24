from django.urls import path
from Congé import views


urlpatterns = [
    path('congé/',views.congeApi,name="Congé"),
    path('congé/<int:id>/', views.congeApi,name="Congé_modif")
    ]