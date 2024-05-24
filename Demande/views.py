from django.views.decorators.csrf import csrf_exempt
from Demande.models import Demande
from django.shortcuts import get_object_or_404,redirect
from django.http import JsonResponse
from .models import Demande,Congé,Employe



@csrf_exempt
def Afficher_dem_en_cours(request):
    demandes_en_cours = Demande.objects.filter(etat=Demande.EN_COURS)
    # Récupérer les informations de la table Conge pour chaque demande en cours
    data = []
    for demande in demandes_en_cours:
        conge = Congé.objects.get(id=demande.code_conge_id)
        employe = Employe.objects.get(id=demande.CIN_id)
        demande_data = {
            'id': demande.id,
            'etat': demande.etat,
            'Nom': employe.Nom,
            'Prenom' : employe.Prenom,
            'ID_conge': conge.id,
            'Date_debut': conge.Date_debut,  # Ajouter le champ date_debut du Conge
            'Date_fin': conge.Date_fin,  # Ajouter le champ date_fin du Conge
        }
        data.append(demande_data)
    # Retourner une réponse JSON avec les résultats
    return JsonResponse(data, safe=False)


@csrf_exempt
def Afficher_dem_acceptees(request):
    demandes_acceptees = Demande.objects.filter(etat=Demande.ACCEPTEE)
    # Récupérer les informations de la table Conge pour chaque demande acceptée
    data = []
    for demande in demandes_acceptees:
        conge = Congé.objects.get(id=demande.code_conge_id)
        employe = Employe.objects.get(id=demande.CIN_id)
        demande_data = {
            'id': demande.id,
            'etat': demande.etat,
            'Nom': employe.Nom,
            'Prenom' : employe.Prenom,
            'Date_debut': conge.Date_debut,  # Ajouter le champ date_debut du Conge
            'Date_fin': conge.Date_fin,  # Ajouter le champ date_fin du Conge
        }
        data.append(demande_data)
    # Retourner une réponse JSON avec les résultats
    return JsonResponse(data, safe=False)

@csrf_exempt
def Afficher_dem_refusees(request):
    demandes_refusees = Demande.objects.filter(etat=Demande.REFUSEE)
    # Récupérer les informations de la table Conge pour chaque demande refusées
    data = []
    for demande in demandes_refusees:
        conge = Congé.objects.get(id=demande.code_conge_id)
        employe = Employe.objects.get(id=demande.CIN_id)
        demande_data = {
            'id': demande.id,
            'etat': demande.etat,
            'Nom': employe.Nom,
            'Prenom' : employe.Prenom,
            'Date_debut': conge.Date_debut,  # Ajouter le champ date_debut du Conge
            'Date_fin': conge.Date_fin,  # Ajouter le champ date_fin du Conge
        }
        data.append(demande_data)
    return JsonResponse(data, safe=False)

@csrf_exempt
def Accepter_demande(request, demande_id):
    if request.method == 'PUT':
        demande = get_object_or_404(Demande, id=demande_id)
        demande.etat = Demande.ACCEPTEE
        demande.save()
        return JsonResponse({'status': 'success', 'message': 'Demande acceptée'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Méthode non autorisée'})
   
@csrf_exempt
def Refuser_demande(request, demande_id):
    if request.method == 'PUT':
        demande = get_object_or_404(Demande, id=demande_id)
        demande.etat = Demande.REFUSEE
        demande.save()
        return JsonResponse({'status': 'success', 'message': 'Demande refusée'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Méthode non autorisée'})
    
