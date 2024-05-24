from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from Congé.serializers import CongéSerializer
from Congé.models import Congé


@csrf_exempt
def congeApi(request,id=0):
    if request.method=='GET':
        congé = Congé.objects.all()
        congé_serializer=CongéSerializer(congé,many=True)
        return JsonResponse(congé_serializer.data,safe=False)
    
    elif request.method=='POST':
        congé_data=JSONParser().parse(request)
        congé_serializer=CongéSerializer(data=congé_data)
        if congé_serializer.is_valid():
            congé_serializer.save()
            return JsonResponse("Congé ajouté avec succès",safe=False)
        return JsonResponse("Congé n'est pas ajouté",safe=False)
    
    elif request.method=='PUT':
        congé=Congé.objects.get(id=id)
        congé_data=JSONParser().parse(request)
        congé_serializer=CongéSerializer(congé,data=congé_data)
        if congé_serializer.is_valid():
            congé_serializer.save()
            return JsonResponse("Congé modifié avec succès",safe=False)
        return JsonResponse("Congé n'est pas modifié",status=404)
    
    elif request.method=='DELETE':
        congé=Congé.objects.get(id=id)
        congé_serializer.delete()
        return JsonResponse("Congé est supprimé avec succès",safe=False)