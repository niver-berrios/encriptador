var txtmensaje = document.getElementById("txtMensaje");
var txtsalida = document.getElementById("txtsalida");
var bEncriptar = document.getElementById("bEncriptar");
var bDesencriptar = document.getElementById("bDesencriptar");
var imagen = document.getElementById("mune");
var pie = document.getElementById("pie"); 
var pie2 = document.getElementById("pie2"); 
var copiar = document.getElementById("copiar")   

function ocultar(){
    imagen.style.visibility = "hidden";
    pie.style.visibility = "hidden";
    pie2.style.visibility = "hidden";
    copiar.style.visibility = "visible";                      
}

function mostrar(){
    copiar.style.visibility = "hidden";
    imagen.style.visibility = "visible";
    pie.style.visibility = "visible";
    pie2.style.visibility = "visible";
}

function sinAcentos(){
    var contar = txtmensaje.value.length;
    for(var i = 0; i <= contar;i++){
       if (txtmensaje.value.charCodeAt(i) >= 123){           
            alert("Ingrese texto sin acentos ni caracteres especiales")           
            return true;
            break;
        }
   }
}

function nomayusculas(){
    var contar = txtmensaje.value.length;
    for (var i = 0; i <= contar;i++){    
        if (txtmensaje.value.charCodeAt(i) > 64 && txtmensaje.value.charCodeAt(i) < 91 ){
            alert("Solo está permitido el uso de minúsculas");
            return true;
            break;
        }
    }
}    

function textoEncriptar (){
    var vocal= ["e","i","o","a","u",];
    var codigo =["enter","imes","ober","ai","ufat",];
    var texto = txtmensaje.value;
    var nuevoTexto =texto;
    if (sinAcentos() == true || nomayusculas() == true){
        txtmensaje.value="";
        txtmensaje.focus();
    }
    else{
        ocultar();            
        for(var i=0;i<=vocal.length;i++){
            nuevoTexto = nuevoTexto.replaceAll(vocal[i],codigo[i]);
        }
        txtsalida.value = nuevoTexto;
        txtmensaje.value = "";
    }
}

function textoDesencriptar(){
    var vocal = ["e","i","o","a","u",];
    var codigo = ["enter","imes","ober","ai","ufat"];
    var texto = txtmensaje.value;
    var nuevoTexto = texto;
    ocultar();
    for(var i = 0;i <= vocal.length;i++){
        nuevoTexto = nuevoTexto.replaceAll(codigo[i],vocal[i]);
    }
    txtsalida.value = nuevoTexto
    txtmensaje.value = "";            
}

function copiarsalida(){
    var copiar = txtsalida;
    copiar.select();
    document.execCommand('copy');     
    alert("Texto copiado");     
    txtsalida.value=""
    txtmensaje.focus();
    mostrar();
}

txtmensaje.addEventListener('keyup',function(event){
if (event.getModifierState('CapsLock')){
    alert("Desactive tecla mayusculas por favor!")
    txtmensaje.value=""                
}
            
else{
    bEncriptar.onclick = textoEncriptar;
    bDesencriptar.onclick = textoDesencriptar;
    copiar.onclick = copiarsalida; 
    }

})

