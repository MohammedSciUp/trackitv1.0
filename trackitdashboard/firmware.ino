
#include <SoftwareSerial.h>
#include <TinyGPSPlus.h>
#include <DHT.h>
#include <Wiegand.h>
#include <ESP8266WiFi.h>
#include <Firebase_ESP_Client.h>



///////////////////////////serial comm esp12e

/////////////////////////// humadity and temp  
#define DHTPIN D2
DHT dht(DHTPIN, DHT11);
float temp;
float hum;

/////////////////////////// RFID 
WIEGAND wg;
unsigned int pinD0 = D4;
unsigned int pinD1 = D3;

/////////////////////////// GPS
TinyGPSPlus gps;
static const int RXPin = D1, TXPin = D0;
static const uint32_t GPSBaud = 9600;
SoftwareSerial ss(RXPin, TXPin);

//Provide the token generation process info.
#include "addons/TokenHelper.h"
//Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"

// Insert your network credentials
#define WIFI_SSID "trackit"
#define WIFI_PASSWORD "trackit1"

// Insert Firebase project API Key
#define API_KEY "AIzaSyCvMdHT1x0DWUrEmytHyVFS8MKY7nITLJw"

// Insert RTDB URLefine the RTDB URL */
#define DATABASE_URL "https://tackitpro-default-rtdb.firebaseio.com/" 

//Define Firebase Data object
FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
bool signupOK = false;

void setup(){
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED){
  Serial.print(".");
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  /* Assign the api key (required) */
  config.api_key = API_KEY;

  /* Assign the RTDB URL (required) */
  config.database_url = DATABASE_URL;

  /* Sign up */
  if (Firebase.signUp(&config, &auth, "", "")){
    Serial.println("ok");
    signupOK = true;
  }
  else{
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  /* Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h
  
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  
  Serial.begin(115200);
  dht.begin();
  ss.begin(GPSBaud);
  wg.begin(pinD0, pinD1);
  
  }}


void loop(){
  if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0)){
    sendDataPrevMillis = millis();
    // Write an Int number on the database path test/int
while (ss.available() > 0)
if (gps.encode(ss.read())){

    
    if (Firebase.RTDB.setDouble(&fbdo, "vms/latitude", gps.location.lat())){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }


     if (Firebase.RTDB.setDouble(&fbdo, "vms/longitude", gps.location.lng())){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }

            if (Firebase.RTDB.setDouble(&fbdo, "vms/speed", gps.speed.kmph())){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());}
    }
      if (Firebase.RTDB.setDouble(&fbdo, "vms/refrigerator_temprature", dht.readTemperature())){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());

    }

    if (Firebase.RTDB.setDouble(&fbdo, "vms/refrigerator_humidity", dht.readHumidity())){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }
        if (Firebase.RTDB.setDouble(&fbdo, "vms/speed", gps.speed.kmph())){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }

while(wg.available()){
double tagsArray[100];  //an array capable of holding 20 entries numbered 0 to 19
byte arrayIndex = 0;
tagsArray[arrayIndex] = wg.getCode() ;//put a value in entry 0
if  (wg.getCode() != tagsArray[arrayIndex]){
arrayIndex++;  //increment the array index
tagsArray[arrayIndex] = wg.getCode();  //put a value in entry 1
//etc, etc

if (gps.speed.kmph()>= 10.0) {

  int number_of_tags =  sizeof(tagsArray) / sizeof(tagsArray[0])
  
  

if (Firebase.RTDB.setArray(&fbdo, "tags/number", tagsArray)){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }

  if (Firebase.RTDB.setArray(&fbdo, "tags/total", number_of_tags)){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }

    if (Firebase.RTDB.setArray(&fbdo, "tags/lat", gps.location.lat())){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }

    if (Firebase.RTDB.setArray(&fbdo, "tags/lon", gps.location.lng())){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }

    delay(500);
}}

}
