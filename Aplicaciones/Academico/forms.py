from django import forms
from .models import Cliente  # Ajusta esto según tus modelos

class ClienteForm(forms.ModelForm):
    class Meta:
        model = Cliente
        fields = '__all__'
