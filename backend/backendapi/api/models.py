from django.db import models

# Create your models here.

class Message(models.Model):
    mssg = models.TextField(max_length=100,blank=False,null=False)



    