from django.urls import path
from Employe import views


urlpatterns = [
   # path('employe/',views.employeApi,name="Employe"),
    path('employe/<str:prenom>', views.Rechercher_prenom, name='Employe_par_nom'),
    path('employe/', views.Afficher_employes, name='Employe_par_nom'),
    path('employe/supprimer/<int:id>/',views.Supprimer_emp,name='Supp_emp'),
    path('employe/modifier/<int:id>/', views.Modifier_emp, name='modifier-employe'), 
    path('employe/ajouter/', views.Ajouter_emp, name='Ajout_emp')
    ]
