 //Realiza um disparo via Ajax para o endereço do meu NodeMcu
	   
 var ip;
 		
 var led_controle = function(status,i) {
     var xmlhttp = new XMLHttpRequest();
     var set_status = "http://"+ i + "?function=" + status; // endereço do esp8266 
     xmlhttp.open("GET", set_status);
     xmlhttp.send();
 }
 
 
    // Acessa os botões e passando as nossas diretivas de ligar ou desligar o led 
 var led = function() {

     var lb1 = document.getElementById('lb1');
     var lb2 = document.getElementById('lb2');
     var lb3 = document.getElementById('lb3');
     var button  =  document.querySelector('.buscaip');
     button.onclick = function() {
           ip = document.getElementById("valor").value;
           document.getElementById("valor").value = "";
           
         }
     
     var ligar = document.querySelector(".ligarLed1");
         ligar.onclick = function() {
             led_controle("led1_on",ip);
             lb1.style.color = "#0F0";
             lb1.innerHTML = "ON";
         }

          var desligar = document.querySelector(".desligarLed1");
             desligar.onclick = function() {
                led_controle("led1_off",ip);
                lb1.style.color = "#f00";
                lb1.innerHTML = "OFF";
             }

              var ligar = document.querySelector(".ligarLed2");
                 ligar.onclick = function() {
                     led_controle("led2_on",ip);
                     lb2.style.color = "#0F0";
                     lb2.innerHTML = "ON";
               }
               var desligar = document.querySelector(".desligarLed2");
                     desligar.onclick = function() {
                            led_controle("led2_off",ip);
                            lb2.style.color = "#F00";
                            lb2.innerHTML = "OFF";
                 }
                 var ligar = document.querySelector(".ligarLed3");
                         ligar.onclick = function() {
                             led_controle("led3_on",ip);
                             lb3.style.color = "#0F0";
                             lb3.innerHTML = "ON";
                         }
                         var desligar = document.querySelector(".desligarLed3");
                             desligar.onclick = function() {
                            led_controle("led3_off",ip);
                            lb3.style.color = "#F00";
                            lb3.innerHTML = "OFF";
                     }

 }

 window.onload = function() {
     // Chama a função led
     
     led();
 }
