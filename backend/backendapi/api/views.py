from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from .models import Message
from .serializers import UserSerializer,MssgSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class MssgViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MssgSerializer
    authentication_classes = { TokenAuthentication, }
    permission_classes = {IsAuthenticated, }