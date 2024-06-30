from django.shortcuts import render, get_object_or_404, redirect
from .models import Cliente
from .forms import ClienteForm
from django.shortcuts import render

def login(request):
    return render(request, 'login.html')

def Contraseña(request):
    return render(request, 'Contraseña.html')

def registro(request):
    return render(request, 'registro.html')

def compras(request):
    return render(request, 'compras.html')

def acercade(request):
    return render(request, 'acercade.html')

def productos(request):
    return render(request, 'productos.html')

def contacto(request):
    return render(request, 'contacto.html')

def home(request):
    return render(request, 'home.html')


def cliente_list(request):
    clientes = Cliente.objects.all()
    return render(request, 'academico/cliente_list.html', {'clientes': clientes})

def cliente_detail(request, pk):
    cliente = get_object_or_404(Cliente, pk=pk)
    return render(request, 'academico/cliente_detail.html', {'cliente': cliente})

def cliente_new(request):
    if request.method == "POST":
        form = ClienteForm(request.POST)
        if form.is_valid():
            cliente = form.save()
            return redirect('cliente_detail', pk=cliente.pk)
    else:
        form = ClienteForm()
    return render(request, 'academico/cliente_edit.html', {'form': form})

def cliente_edit(request, pk):
    cliente = get_object_or_404(Cliente, pk=pk)
    if request.method == "POST":
        form = ClienteForm(request.POST, instance=cliente)
        if form.is_valid():
            cliente = form.save()
            return redirect('cliente_detail', pk=cliente.pk)
    else:
        form = ClienteForm(instance=cliente)
    return render(request, 'academico/cliente_edit.html', {'form': form})

def cliente_delete(request, pk):
    cliente = get_object_or_404(Cliente, pk=pk)
    if request.method == 'POST':
        cliente.delete()
        return redirect('cliente_list')
    return render(request, 'academico/cliente_confirm_delete.html', {'cliente': cliente})
