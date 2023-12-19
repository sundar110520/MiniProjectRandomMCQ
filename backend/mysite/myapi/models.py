# models.py
from django.db import models
class Hero(models.Model):
    name = models.CharField(max_length=60)
    alias = models.CharField(max_length=60)
    id = models.CharField(max_length=60,primary_key=True)
    question = models.CharField(max_length=100, default='default_value')
    options = models.CharField(max_length=100, default='default_value')
    correctAnswer = models.CharField(max_length=100, default='default_value')
    def __str__(self):
        return self.name


