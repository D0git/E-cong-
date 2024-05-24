from django.urls import path
from Demande import views


urlpatterns = [
    path('demande/en_cours',views.Afficher_dem_en_cours,name="Demande_en_cours"),
    path('demande/acceptees',views.Afficher_dem_acceptees,name="Demande_acceptees"),
    path('demande/refusees',views.Afficher_dem_refusees,name="Demande_refusees"),
    path('demande/accepter-demande/<int:demande_id>', views.Accepter_demande, name="Accepter_demande"),
    path('demande/refuser-demande/<int:demande_id>', views.Refuser_demande, name="Refuser_demande"),
    ]
