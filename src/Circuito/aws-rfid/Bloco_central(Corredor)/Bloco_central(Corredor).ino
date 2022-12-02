// Inpotação das blibliotecas
#include "Secrets.h"
#include <WiFiClientSecure.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include "WiFi.h"
#include <MFRC522.h>
#include <SPI.h>
#include <Wire.h>

// Define os parametros de publicação dos dados para a aws
#define AWS_IOT_PUBLISH_TOPIC   "2esp32/pub"
#define AWS_IOT_SUBSCRIBE_TOPIC "2esp32/sub"

// Define as portas dos sensores e leds 
#define RFID_SS_SDA   21
#define RFID_RST      14
int buzzer = 16;
int LED = 36;
int LED2 = 41;

// Cria duas variaves que são enviadas para a AWS
char* h;
const char* location = "corredor"; 
MFRC522 rfidBase = MFRC522(RFID_SS_SDA, RFID_RST);

// Funçãoes de leitura do sensor rfid
// Classe relacionada à leitura do RFID, consegue declarar variáveis públicas, a serem utilizadas em qualquer lugar do código e podendo ser instaciadas
class LeitorRFID{
  private:
    char codigoRFIDLido[100] = "";
    char codigoRFIDEsperado[100] = "";
    MFRC522 *rfid = NULL;
    int cartaoDetectado = 0;
    int cartaoJaLido = 0;
    // Processa o Código lido do RFID e o tempo
    void processaCodigoLido(){
      char codigo[3*rfid->uid.size+1];
      codigo[0] = 0;
      char temp[10];  
      for(int i=0; i < rfid->uid.size; i++){
        sprintf(temp,"%X",rfid->uid.uidByte[i]);
        strcat(codigo,temp);
      }
      codigo[3*rfid->uid.size+1] = 0;    
      strcpy(codigoRFIDLido,codigo);
      Serial.println(codigoRFIDLido);
    }
  // Inicialização do PCD e print de atributos do leitor
  public:
    LeitorRFID(MFRC522 *leitor){
      rfid = leitor;
      rfid->PCD_Init(); 
      Serial.printf("MOSI: %i MISO: %i SCK: %i SS: %i\n",MOSI,MISO,SCK,SS);
    };
    // Leitura do Tipo do Cartão
    char *tipoCartao(){
      MFRC522::PICC_Type piccType = rfid->PICC_GetType(rfid->uid.sak);
      Serial.println(rfid->PICC_GetTypeName(piccType));
      return((char *)rfid->PICC_GetTypeName(piccType));
    };
    int cartaoPresente(){
      return(cartaoDetectado);
    };
    int cartaoFoiLido(){
      return(cartaoJaLido);
    };

    void leCartao(){
      if (rfid->PICC_IsNewCardPresent()) { // Nova tag disponivel
        Serial.println("Cartao presente");
        cartaoDetectado = 1;
        if (rfid->PICC_ReadCardSerial()) { // O id foi lido   
          Serial.println("Cartao lido");  
          cartaoJaLido = 1;
          processaCodigoLido();
          rfid->PICC_HaltA(); 
          rfid->PCD_StopCrypto1(); 
        }
      }else{
        cartaoDetectado = 0;
      }
    };
    char *cartaoLido(){
      return(codigoRFIDLido);
    };
    // Define as variáveis com o valor igual a 0 com a finalidade de resetar
    void resetarLeitura(){
      cartaoDetectado = 0;
      cartaoJaLido = 0;
    }
    void listI2CPorts(){
      Serial.println("\nI2C Scanner");
      byte error, address;
      int nDevices;
      Serial.println("Scanning...");
      nDevices = 0;
      for(address = 1; address < 127; address++ ) {
        Wire.beginTransmission(address);
        error = Wire.endTransmission();
        if (error == 0) {
          Serial.print("I2C device found at address 0x");
          if (address<16) {
            Serial.print("0");
          }
          Serial.println(address,HEX);
          nDevices++;
        }
        else if (error==4) {
          Serial.print("Unknow error at address 0x");
          if (address<16) {
            Serial.print("0");
          }
          Serial.println(address,HEX);
        }    
      }
      if (nDevices == 0) {
        Serial.println("No I2C devices found\n");
      }
      else {
        Serial.println("done\n");
      }
    };
};
LeitorRFID *leitor = NULL;




//Conexão com a internet e com o servidor da AWS
//Chama a função de conexão com o wifi
WiFiClientSecure net = WiFiClientSecure();
PubSubClient client(net);
 
 //cria a função para conectar na aws
void connectAWS()
{
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
 
  Serial.println("Connecting to Wi-Fi");
 
  while (WiFi.status() != WL_CONNECTED)
  {
    digitalWrite(LED2,HIGH);
    delay(400);
    Serial.print(".");
    digitalWrite(LED2,LOW);
    delay(400);
  }
 
  // Configurar WiFiClientSecure para usar as credenciais do dispositivo AWS IoT
  net.setCACert(AWS_CERT_CA);
  net.setCertificate(AWS_CERT_CRT);
  net.setPrivateKey(AWS_CERT_PRIVATE);
 
  // Conecte-se ao agente MQTT no endpoint da AWS
  client.setServer(AWS_IOT_ENDPOINT, 8883);
 
  // Criar um manipulador de mensagens
  client.setCallback(messageHandler);
 
  Serial.println("Connecting to AWS IOT");
 
  while (!client.connect(THINGNAME))
  {
    digitalWrite(LED2,HIGH);
    Serial.print(".");
    delay(400);
    digitalWrite(LED2,LOW);
    delay(400);
  }
 
  if (!client.connected())
  {
    Serial.println("AWS IoT Timeout!");
    return;
  }
 
  // Inscrever-se em um tópico
  client.subscribe(AWS_IOT_SUBSCRIBE_TOPIC);
 
  Serial.println("AWS IoT Connected!");
  digitalWrite(LED2,HIGH);
  tone(buzzer,2000,200);
  tone(buzzer,2500,200);
  
}
 
// Publicação da mensagem na aws 
void publishMessage()
{
  StaticJsonDocument<200> doc;
  doc["rfid"] = h;
  doc["localizacao"] = location;
  char jsonBuffer[512];
  serializeJson(doc, jsonBuffer);
 
  client.publish(AWS_IOT_PUBLISH_TOPIC, jsonBuffer); // publica a mensagem para o cliente 
}

// Cria o começo da mensagem para ser publicada 
void messageHandler(char* topic, byte* payload, unsigned int length)
{
  Serial.print("incoming: ");
  Serial.println(topic);
 
  StaticJsonDocument<200> doc;
  deserializeJson(doc, payload);
  const char* message = doc["message"];
  Serial.println(message);
}
 
void setup()
{
  // Define as portas do led, do buzzer e inicia a conexão com a AWS
  Serial.begin(115200);
  pinMode(buzzer, OUTPUT);
  pinMode(LED, OUTPUT);
  pinMode(LED2, OUTPUT);
  connectAWS();
  SPI.begin();  
  leitor = new LeitorRFID(&rfidBase);
}
 
void loop()
{
  //leitura do cartão
  leitor->leCartao();
  //se o cartão foi lido
  if(leitor->cartaoFoiLido()){
    //printa o tipo do cartão
        client.loop();
    Serial.println(leitor->tipoCartao());
    // printa o id do cartão
        client.loop();
    Serial.println(leitor->cartaoLido());
        client.loop();
    h=leitor->cartaoLido();
        client.loop();
    publishMessage();
        client.loop();
    
    leitor->resetarLeitura();
    //acende o led
        client.loop();
    digitalWrite(LED,HIGH);
    delay(500);
    //apaga o led
        client.loop();
    digitalWrite(LED,LOW);
  }
    client.loop();
}

