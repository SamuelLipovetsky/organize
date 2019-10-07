from rest_framework import routers

from .views import CashViewSet  

router= routers.DefaultRouter()
router.register('cash',CashViewSet,'cash')

urlpatterns=router.urls