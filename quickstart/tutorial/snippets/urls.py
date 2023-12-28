from django.urls import path, include
from snippets import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'snippets', views.SnippetViewSet, basename='snippet')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]
