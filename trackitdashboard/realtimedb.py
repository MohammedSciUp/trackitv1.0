import pyrebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Setup
cred = credentials.Certificate("testing-d7987-firebase-adminsdk-91gws-dee6f6a7f0.json")

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
};
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
    else:
        return('invalid input !!')




# Setup
cred = credentials.Certificate("testing-d7987-firebase-adminsdk-91gws-dee6f6a7f0.json")
firebase_admin.initialize_app(cred)

db=firestore.client()




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

dbfs.collection('stations').document('teststation').set(teststation)
