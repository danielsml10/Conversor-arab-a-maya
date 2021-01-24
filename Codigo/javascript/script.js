// JavaScript source code

 var nivel = 0;
 var suma = 0;

function convNum(num){
	if(parseInt(num.value) >= 0 && parseInt(num.value) < 8000 ){
		let n = parseInt(num.value);
		let x,y,z;
		let nivel1 = document.getElementById('nivel1');
		let nivel2 = document.getElementById('nivel2');
		let nivel3 = document.getElementById('nivel3');
			if(n<20){
				x=n;
				y=null;
				z=null;
			}else if(n>=20 && n<400){
				y=Math.trunc(n/20);
				x = n-(y*20);
				z=null;
			}else{
				z = Math.trunc(n/400);
				y = Math.trunc((n-(z*400))/20);
				x = n-(z*400)-(y*20);
			}
			console.log("el primer nivel es igual a: "+x);
			nivel1.src ="imagenes/"+x+".png";
			console.log("el segundo nivel es igual a: "+y);
			if(y==null) nivel2.src = ""; else nivel2.src = "imagenes/"+y+".png";
			console.log("el tercer nivel es igual a: "+z);
			if(z==null) nivel3.src=""; else nivel3.src = "imagenes/"+z+".png";

	}else alert('Solo se permiten valores entre 0 y 7999');
}

function seleccion(img){
	if(document.getElementById('numConv').value == ''){
		nivel++;
		let numSum = parseInt(img.name);
		let nivelSel = document.getElementById('nivel'+nivel+'m');
		nivelSel.src = img.src;
		document.getElementById('btnLimpiar').disabled=false;
		switch(nivel){
			case 1:
				suma+= numSum;
				break
			case 2:
				suma+= (numSum*20);
				break;
			case 3:
				suma+= (numSum*400);
				break;
		}
		if(nivel==3) enviar();
		if(nivel==1) document.getElementById('btnConvM').disabled = false;
	}else{
		alert("limpia primero la pantalla");
	}
}

function enviar(){
	document.getElementById('btnConvM').disabled = true;
	document.getElementById('numConv').value = suma;
	suma = 0;
	nivel=0;
}

function limpiar(){
	document.getElementById('nivel1m').src='imagenes/nivel.png';
	document.getElementById('nivel2m').src='imagenes/nivel.png';
	document.getElementById('nivel3m').src='imagenes/nivel.png';
	document.getElementById('btnLimpiar').disabled=true;
	document.getElementById('numConv').value='';
	suma = 0;
	nivel = 0;
}