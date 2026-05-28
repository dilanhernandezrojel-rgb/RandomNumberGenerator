function generarNumero(){
    const minimo=parseInt(document.getElementById('minimo').value);
    const maximo=parseInt(document.getElementById('maximo').value);
    const resultado=document.getElementById('resultado');

    if(isNaN(minimo) || isNaN(maximo)){
        resultado.innerHTML="!";
        alert("Ingresa ambos numeros");
        return;
    }
    if(minimo>maximo){
        resultado.innerHTML="!";
        alert("El minimo no puede ser mayor al maximo");
        return;
    }
    const numero=Math.floor(Math.random()*(maximo-minimo+1))+minimo;

    resultado.innerHTML=numero;
}

