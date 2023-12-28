from django.urls import path, include
from product import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'products', views.ProductViewSet, basename='products')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls))
]
