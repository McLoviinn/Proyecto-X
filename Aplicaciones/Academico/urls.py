from django.urls import path
from . import views

urlpatterns = [
    path('clientes/', views.cliente_list, name='cliente_list'),
    path('clientes/<int:pk>/', views.cliente_detail, name='cliente_detail'),
    path('clientes/new/', views.cliente_new, name='cliente_new'),
    path('clientes/<int:pk>/edit/', views.cliente_edit, name='cliente_edit'),
    path('clientes/<int:pk>/delete/', views.cliente_delete, name='cliente_delete'),
    path('', views.home, name='home'),
    path('contacto/', views.contacto, name='contacto'),
    path('productos/', views.productos, name='productos'),
    path('acercade/', views.acercade, name='acercade'),
    path('compras/', views.compras, name='compras'),
    path('login/', views.login, name='login'),
    path('registro/', views.registro, name='registro'),
    path('Contraseña/', views.Contraseña, name='Contraseña'),
]
