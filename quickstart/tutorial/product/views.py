from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework import viewsets
from rest_framework.decorators import action
from product.models import Category, Product
from oauth2_provider.contrib.rest_framework.permissions import TokenMatchesOASRequirements
from oauth2_provider.contrib.rest_framework.authentication import OAuth2Authentication
from rest_framework.permissions import AllowAny, IsAuthenticated
from product.serializers import CategorySerializer, ProductSerializer
from rest_framework.response import Response
from rest_framework.permissions import AllowAny


class ProductViewSet(viewsets.ModelViewSet):
    """
    This ViewSet automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    authentication_classes = [OAuth2Authentication]
    permission_classes = [TokenMatchesOASRequirements]
    required_alternate_scopes = {
        # "GET": [["product:read"]],
        "POST": [["product:create"]],
        "PUT":  [["product:update"]],
        "DELETE": [["product:delete"]],
    }

    def get_permissions(self):
        """Returns the permission based on the type of action"""

        if self.action == "list":
            return [AllowAny()]

        return [IsAuthenticated()]


            

