
var Calculadora={
init: function(){
    var numero1=document.getElementById("1");

    numero1.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(numero1);
                  });
    numero1.addEventListener("mouseleave", function() {
                  TamañoBoton(numero1);
                  });
    numero1.addEventListener("click",function() {
                  AddNumero("1");
                  });

    var num2=document.getElementById("2");
    num2.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(num2);
                  });
    num2.addEventListener("mouseleave", function() {
                  TamañoBoton(num2);
                  });
    num2.addEventListener("click",function() {
                  AddNumero("2");
                  });
    var num3=document.getElementById("3");
    num3.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(num3);
                  });
    num3.addEventListener("mouseleave", function() {
                  TamañoBoton(num3);
                  });
    num3.addEventListener("click",function() {
                  AddNumero("3");
                  });
    var num4=document.getElementById("4");
    num4.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(num4);
                  });
    num4.addEventListener("mouseleave", function() {
                  TamañoBoton(num4);
                  });
    num4.addEventListener("click",function() {
                  AddNumero("4");
                  });
    var num5=document.getElementById("5");
    num5.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(num5);
                  });
    num5.addEventListener("mouseleave", function() {
                  TamañoBoton(num5);
                  });
    num5.addEventListener("click",function() {
                  AddNumero("5");
                  });
    var num6=document.getElementById("6");
    num6.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(num6);
                  });
    num6.addEventListener("mouseleave", function() {
                  TamañoBoton(num6);
                  });
    num6.addEventListener("click",function() {
                  AddNumero("6");
                  });
    var num7=document.getElementById("7");
    num7.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(num7);
                  });
    num7.addEventListener("mouseleave", function() {
                  TamañoBoton(num7);
                  });
    num7.addEventListener("click",function() {
                  AddNumero("7");
                  });
    var num8=document.getElementById("8");
    num8.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(num8);
                  });
    num8.addEventListener("mouseleave", function() {
                  TamañoBoton(num8);
                  });
    num8.addEventListener("click",function() {
                  AddNumero("8");
                  });
    var num9=document.getElementById("9");
    num9.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(num9);
                  });
    num9.addEventListener("mouseleave", function() {
                  TamañoBoton(num9);
                  });
    num9.addEventListener("click",function() {
                  AddNumero("9");
                  });
    var num0=document.getElementById("0");
    num0.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(num0);
                  });
    num0.addEventListener("mouseleave", function() {
                  TamañoBoton(num0);
                  });
    num0.addEventListener("click",function() {
                  AddNumero("0");
                  });
    var mas =document.getElementById("mas");
    mas.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(mas);
                  });
    mas.addEventListener("mouseleave", function() {
                  TamañoBoton(mas);
                  });
    mas.addEventListener("click",function() {
                  AddNumero("+");
                  });
    var menos=document.getElementById("menos");
    menos.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(menos);
                  });
    menos.addEventListener("mouseleave", function() {
                  TamañoBoton(menos);
                  });
    menos.addEventListener("click",function() {
                  AddNumero("-");
                  });
    var por=document.getElementById("por");
    por.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(por);
                  });
    por.addEventListener("mouseleave", function() {
                  TamañoBoton(por);
                  });
    por.addEventListener("click",function() {
                  AddNumero("*");
                  });
    var divi=document.getElementById("dividido");
    divi.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(divi);
                  });
    divi.addEventListener("mouseleave", function() {
                  TamañoBoton(divi);
                  });
    divi.addEventListener("click",function() {
                  AddNumero("/");
                  });
    var igual=document.getElementById("igual");
    igual.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(igual);
                  });
    igual.addEventListener("mouseleave", function() {
                  TamañoBoton(igual);
                  });
    igual.addEventListener("click",Calcular);

    var punto=document.getElementById("punto");
    punto.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(punto);
                  });
    punto.addEventListener("mouseleave", function() {
                  TamañoBoton(punto);
                  });
    punto.addEventListener("click",function() {
                  AddNumero(".");
                  });
    var elimina=document.getElementById("on");
    elimina.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(elimina);
                  });
    elimina.addEventListener("mouseleave", function() {
                  TamañoBoton(elimina);
                  });
    elimina.addEventListener("click",Borrar);

    var cambiasigno=document.getElementById("sign");
    cambiasigno.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(cambiasigno);
                  });
    cambiasigno.addEventListener("mouseleave", function() {
                  TamañoBoton(cambiasigno);
                  });
    cambiasigno.addEventListener("click",CambiarSig);

    var raiz=document.getElementById("raiz");
    raiz.addEventListener("mouseover", function() {
                  ReducirTamañoBoton(raiz);
                  });
    raiz.addEventListener("mouseleave", function() {
                  TamañoBoton(raiz);
                  });
    raiz.addEventListener("click",CalcularRaiz);
}
}

//Funcion para reducir el tamaño del boton
function ReducirTamañoBoton(elemento){
  var suma=document.getElementById("mas");
  if(elemento==suma){
    elemento.style.width = "77.65px";
    elemento.style.height="147.9px";
  }
  else{
  elemento.style.width = "75.8667px";
  elemento.style.height="60.9167px";
}
}
//Funcion obtener tamaño original del boton
function TamañoBoton(elemento){
  var suma=document.getElementById("mas");

  if(elemento==suma){
    elemento.style.width = "79.65px";
    elemento.style.height="148.9px";
  }
  else{
   elemento.style.width = "77.8667px";
   elemento.style.height="62.9167px";
}
}

//cadena
var num1="";
//resultado que se muestra en pantalla
var resultado="";


//agregar numero
function AddNumero(valor){
  var ventana = document.getElementById("display");
  num1 = num1 + valor;
  if(valor=="0"){
    resultado="0";
    ventana.innerHTML = resultado;
  }

  if(valor!="0"){
    resultado=resultado+valor;
    var res =parseFloat (resultado) .toFixed(0);
    ventana.innerHTML = res;
  }
  //pendiente

  if(valor=="."){
    if((resultado[0]=="0")&&(resultado[1]==".")){
      resultado="0."
      ventana.innerHTML =resultado;
    }
    else{
       var res =parseFloat (resultado).toFixed(0);
        resultado = res+".";
        ventana.innerHTML =resultado;
    }
  }

  if(resultado.length>=8){
  resultado = resultado.substring(0,8);
  ventana.innerHTML = resultado;
  }
  if ((valor=="+")||(valor=="-")||(valor=="*")||(valor=="/")){
     resultado="";
     ventana.innerHTML = resultado;
   }

}

//calcular datos ingresados
function Calcular()	{
  //tomar cadena de caracteres num1 y evaluarla
  var resp= eval(num1);
  var cadena = resp.toString();

	var ventana = document.getElementById("display");
  if(cadena.length>=8)
  {
    var res = cadena.substring(0, 8);
    ventana.innerHTML=res;
    alert("el resultado sobrepasa los 8 caracteres")
  }
  else{
   ventana.innerHTML=resp;
  }
}

//calcular la raiz
function CalcularRaiz()	{
	var raizd = Math.sqrt(num1)
  var cadena1 = raizd.toString();
	var ventana = document.getElementById("display");
	num1 = raizd;

  if(cadena1.length>=8){
    var res2 = cadena1.substring(0,8);
    ventana.innerHTML = res2;
    alert("el resultado sobrepasa los 8 caracteres")
  }
  else{
    ventana.innerHTML = raizd;
  }
}

function CambiarSig()	{
	var signo = num1*(-1);
  var ventana = document.getElementById("display");
	ventana.innerHTML = signo;
	num1 = signo;

}

function Borrar(){
    var borrar=document.getElementById("display");
  	num1=0;
    resultado=0;
  	borrar.innerHTML=resultado;
}



Calculadora.init();
