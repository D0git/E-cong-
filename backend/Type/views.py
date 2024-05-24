from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from Type.serializers import TypeSerializer
from Type.models import Type


@csrf_exempt
def typeApi(request,id=0):
    if request.method=='GET':
        type = Type.objects.all()
        type_serializer=TypeSerializer(type,many=True)
        return JsonResponse(type_serializer.data,safe=False)
    
    elif request.method=='POST':
        type_data=JSONParser().parse(request)
        type_serializer=TypeSerializer(data=type_data)
        if type_serializer.is_valid():
            type_serializer.save()
            return JsonResponse("Type est ajouté avec succès",safe=False)
        return JsonResponse("Type n'est pas ajouté",safe=False)
    
    elif request.method=='PUT':
        type=type.objects.get(id=id)
        typee_data=JSONParser().parse(request)
        type_serializer=TypeSerializer(type,data=type_data)
        if type_serializer.is_valid():
            type_serializer.save()
            return JsonResponse("Type est modifié avec succès",safe=False)
        return JsonResponse("Type n'est pas modifié",status=404)
    
    elif request.method=='DELETE':
        type=type.objects.get(id=id)
        type_serializer.delete()
        return JsonResponse("Type est supprimé avec succès",safe=False)