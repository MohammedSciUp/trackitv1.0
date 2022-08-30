
from django.urls import path
from . import views





urlpatterns = [
	
	path('loginp/', views.loginp, name="loginp"),  
	path('logout/', views.logoutUser, name="logout"),
	path('', views.CMS , name='CMS'),
	
	path('Map/', views.Map , name='Map'),
	path('Summary/', views.Summary , name='Summary'),
	path('page404/', views.page404 , name='page404'),
	path('IVMS/', views.IVMS , name='IVMS'),
	
    
]