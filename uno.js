/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay).
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre; 
	let temperatura;
	let sexo;
	let edad; 
	let masTemperatura; 
	let contMujeres = 0; 
	let contHombres = 0;
	let acumuladorEdad = 0; 
	let tempMax = 0; 


	
	for (let i = 0; i<5;i++){

		nombre = prompt("Ingrese nombre: ");

		temperatura = parseInt(prompt("Ingrese Temperatura: "));
		while (temperatura<0){
			temperatura = prompt("Invalido, Ingrese Temperatura: ");
		}

		sexo = prompt('Ingrese sexo "f" o "m": ');
		while (sexo !=  "f" && sexo != "m" ){
			sexo = prompt('Invalido, Ingrese sexo "f" o "m": ');
		}
		edad = parseInt(prompt("Ingrese edad: "));
		while(isNaN(edad)||edad<1){
			edad = parseInt(prompt("Invalido, Ingrese edad:")); 
		}
		acumuladorEdad = acumuladorEdad + edad; 
		if (sexo =="f"){
			contMujeres++; 
		}
		if (sexo =="m"){
			contHombres++; 
		}
		if (sexo == "m" && temperatura > tempMax){
		masTemperatura = nombre; 
		tempMax = temperatura;  

		}
		promedio = acumuladorEdad / 5;

	}
	console.log("A. Hay "+contMujeres+" mujeres.");
	console.log("A- Hay "+contHombres+" hombres.");
	console.log("B. La edad promedio es: "+promedio);
	console.log("C. La mujer con mas temperatura es: "+masTemperatura); 
	
}