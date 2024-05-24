from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from Employe.serializers import EmployeSerializer
from Employe.models import Employe


@csrf_exempt
def Ajouter_emp(request):    
    if request.method == 'POST':
        employe_data = JSONParser().parse(request)
        last_id = Employe.objects.last().id if Employe.objects.exists() else 0
        new_id = last_id + 1
        employe_data['id'] = new_id
        employe_serializer = EmployeSerializer(data=employe_data)
        if employe_serializer.is_valid():
            employe_serializer.save()
            return JsonResponse({"message": "L'employé a été ajouté avec succès"})
        return JsonResponse({"message": "Méthode non autorisée"}, status=405)

@csrf_exempt 
def Modifier_emp(request, id=0):     
    if request.method=='PUT':
        employe=Employe.objects.get(id=id)
        employe_data=JSONParser().parse(request)
        employe_serializer=EmployeSerializer(employe,data=employe_data)
        if employe_serializer.is_valid():
            employe_serializer.save()
            return JsonResponse("L'employé est modifié avec succès",safe=False)
        return JsonResponse("L'employé n'est pas modifié",status=404)
    
    
@csrf_exempt
def Supprimer_emp(request, id=0):    
    if request.method=='DELETE':
        employe=Employe.objects.get(id=id)
        employe.delete()
        return JsonResponse({"message":"L'employé est supprimé avec succès"},safe=False)
    else:
        return JsonResponse({"message": "La méthode de requête n'est pas autorisée"}, status=405)


@csrf_exempt 
def Afficher_employes(request, id=0):
    if request.method=='GET':
        employe = Employe.objects.all().order_by('id')
        employe_serializer=EmployeSerializer(employe,many=True)
        return JsonResponse(employe_serializer.data,safe=False)
        
@csrf_exempt 
def Rechercher_prenom(request, prenom):
    if request.method=='GET':
        employe = Employe.objects.filter(Prenom=prenom)
        employe_serializer = EmployeSerializer(employe, many=True)
        return JsonResponse(employe_serializer.data, safe=False)