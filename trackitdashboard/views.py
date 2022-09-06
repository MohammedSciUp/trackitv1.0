from django.shortcuts import render
from django.shortcuts import render, redirect 
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required

import pyrebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import datetime as dt
# Setup
cred = credentials.Certificate("trackitdashboard/service_account.json")
try:   
    firebase_admin.initialize_app(cred) 
except ValueError:
    pass
dbfs = firestore.client()
# firebase things .. 
firebaseConfig = {
  'apiKey': "AIzaSyBJWTrMZJ86yfP8LyLhq2d4KIQOMpSv7Jk",
  'authDomain': "testing-d7987.firebaseapp.com",
  'databaseURL': "https://testing-d7987-default-rtdb.firebaseio.com",
  'projectId': "testing-d7987",
  'storageBucket': "testing-d7987.appspot.com",
  'messagingSenderId': "245588365374",
  'appId': "1:245588365374:web:333351dfcefc78681c816f",
  'measurementId': "G-M3QW5Y6QFL"
}
firebase = pyrebase.initialize_app(firebaseConfig)
# #realtime database 
db = firebase.database()
# naming variables 
def fromfirebase(x):    
    if x == 'driver_iD':
        return (db.child("TestStation").child("driver_iD").get().val())
    elif x == 'co_driver_iD':
        return (db.child("TestStation").child("co_driver_iD").get().val())
    elif x == 'seatbelt':
        return (db.child("TestStation").child("seatbelt").get().val())
    elif x == 'engine_temprature':
        return (db.child("TestStation").child("engine_temprature").get().val())
    elif x == 'fuel_level':
        return (db.child("TestStation").child("fuel_level").get().val())
    elif x == 'refrigerator_humidity':
        return (db.child("TestStation").child("hdt").child("hum").get().val())
    elif x == 'refrigerator_temprature':
        return (db.child("TestStation").child("hdt").child("temp").get().val())
    elif x == 'speed':
        return (db.child("TestStation").child("gpsinfo").child("SPEED").get().val())
    elif x == 'latitude':
        return (db.child("TestStation").child("gpsinfo").child("LATITUDE").get().val())
    elif x == 'longitude':
        return (db.child("TestStation").child("gpsinfo").child("LONGITUDE").get().val())
    elif x == 'time':
        return (db.child("TestStation").child("gpsinfo").child("TIME").get().val())
    elif x == 'date':
        return (db.child("TestStation").child("gpsinfo").child("DATE").get().val())
    elif x == 'tags':
        return(db.child("TestStation").child("tags").get())
    if x == 'driver_iD':
        return (db.child("vms").child("driver_iD").get().val())
    elif x == 'co_driver_iD':
        return (db.child("vms").child("co_driver_iD").get().val())
    elif x == 'seatbelt':
        return (db.child("vms").child("seatbelt").get().val())
    elif x == 'engine_temprature':
        return (db.child("vms").child("engine_temprature").get().val())
    elif x == 'fuel_level':
        return (db.child("vms").child("fuel_level").get().val())
    elif x == 'refrigerator_temprature':
        return (db.child("vms").child("refrigerator_temprature").get().val())
    elif x == 'refrigerator_temprature':
        return (db.child("vms").child("refrigerator_temprature").get().val())
    elif x == 'speed':
        return (db.child("vms").child("speed").get().val())
    elif x == 'latitude':
        return (db.child("vms").child("latitude").get().val())
    elif x == 'longitude':
        return (db.child("vms").child("longitude").get().val())
    elif x == 'number':
        return (db.child("tags").child("number").get().val())
    else:
        return('invalid input !!')

# Setup
# cred = credentials.Certificate('service_account.json')


teststation = {
  "TestStation": {
    "gpsinfo": {
      "DATE": fromfirebase('date'),
      "LATITUDE": fromfirebase('latitude'),
      "LONGITUDE": fromfirebase('longitude'),
      "SPEED": fromfirebase("speed"),
      "TIME": fromfirebase('time')
    },
    "hdt": {
      "hum": fromfirebase("hum"),
      "temp": fromfirebase("temp")
    },
    "tags":[]
  }
}
current_time = dt.datetime.now()
dbfs.collection('stations').document('teststation').set(teststation)
dbfs.collection('stations').document('teststation').collection('current_time').document('teststation').set(teststation)


# ..................

# Create your views here.
def loginp(request):
	if request.user.is_authenticated:
		return redirect('sumchecking')
	else:
		if request.method == 'POST':
			username = request.POST.get('username')
			password =request.POST.get('password')

			user = authenticate(request, username=username, password=password)

			if user is not None:
				login(request, user)
				return redirect('sumchecking')
			else:
				messages.info(request, 'Username OR password is incorrect')

		context = {}
		return render(request, 'loginp.html', context)

def logoutUser(request):
	logout(request)
	return redirect('loginp')


 
@login_required(login_url='/loginp/')
def sumchecking(request):
	
	location  =  request.POST.get('location')
	datelocation      = request.POST.get('date')
	# selectstation =  request.POST.get('selectstation')
	print(location)
	print(datelocation)

	return render(request, 'sumchecking.html')
	


    

@login_required(login_url='/loginp/')
def IVMS(request):
	return render(request, 'IVMS.html')

@login_required(login_url='/loginp/')
def Map(request):
	return render(request, 'Map.html')

@login_required(login_url='/loginp/')
def Summary(request):
	return render(request, 'Summary.html')

@login_required(login_url='/loginp/')
def CMS(request):
	return render(request, 'CMS.html')


@login_required(login_url='/loginp/')
def page404(request):
	return render(request, '404page.html')

