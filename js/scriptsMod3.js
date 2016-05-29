$(document).ready(function () {
  // Módulo 3
  //Ejercicio 1 operaciones matemáticas
  $('.ej1').click(function (e) {

    var num1 = parseInt(prompt('Ingrese un número'))
      , num2 = parseInt(prompt('Ingrese el 2o número'));

    alert('num 1 = ' + num1 + '\nnum 2 = ' + num2 + '\nnum1 + num2 = ' + (num1 + num2) + '\nnum1 - num2 = ' + (num1 - num2) + '\nnum1 * num2 = ' + (num1 * num2) + '\nnum1 / num2 = ' + (num1 / num2) + '\nnum1 % num2 (módulo) = ' + (num1 % num2));
    e.preventDefault();
  });



  //Módulo 3 Ejercicio2
  $('.ej2').click(function (e) {
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    alert('Los meses del año son: \n' + months);

    var mesBuscado = parseInt(prompt('Ingrese el mes que desea buscar (1-12)'));
    
    switch (mesBuscado) {
    case 1:
      alert(months[0]);
      break;
    case 2:
      alert(months[1]);
      break;
    case 3:
      alert(months[2]);
      break;
    case 4:
      alert(months[3]);
      break;
    case 5:
      alert(months[4]);
      break;
    case 6:
      alert(months[5]);
      break;
    case 7:
      alert(months[6]);
      break;
    case 8:
      alert(months[7]);
      break;
    case 9:
      alert(months[8]);
      break;
    case 10:
      alert(months[9]);
      break;
    case 11:
      alert(months[10]);
      break;
    case 12:
      alert(months[11]);
      break;
    default:
      alert('Ingrese un número entre 1 y 12');
    }
    e.preventDefault();
  });


  //Ejercicio 3.1
  //Menor de dos números
  $('.ej31').click(function (e) {
    var n1 = parseFloat(prompt('Ingrese número 1'))
      , n2 = parseFloat(prompt('Ingrese número 2'));
    
    if (n1 < n2) {
      alert(n1 + ' es el menor');
    } else {
      alert(n2 + ' es el menor');
    }
    
    e.preventDefault();
  });

  //Ejercicio 3.2
  //Respuesta según edad

  $('.ej32').click(function (e) {

    var edad = parseInt(prompt('Ingrese su edad'));
    
    if (edad >= 18) {
      alert('Eres mayor de edad');
    } else {
      alert('Eres menor de edad');
    }
    
    e.preventDefault();
  });

  //Ejercicio 3.3
  //Nombre y estatura

  $('.ej33').click(function (e) {
    var nombre = prompt('Ingresa tu nombre')
      , estatura = parseFloat(prompt(nombre + ', ingresa tu estatura'));
    
    if (estatura <= 1.6) {
      alert(nombre + ', eres una persona de baja estatura');
    } else if (estatura > 1.6 && estatura <= 1.750) {
      alert(nombre + ', eres una persona de estatura normal');
    } else {
      alert(nombre + ', eres una persona de estatura alta');
    }
    
    e.preventDefault();
  });

  //Ejercicio 3.4
  //Nombre y nota
  $('.ej34').click(function (e) {
    var nombre = prompt('Ingresa tu nombre')
      , apellido = prompt('Ingresa tu apellido')
      , nota = parseFloat(prompt(nombre + ' ' + apellido + ' ingresa tu nota'));

    if (nota < 3 && nota >= 0) {
      alert(nombre + ' ' + apellido + ', perdiste la materia');
    } else if (nota >= 3 && nota < 4) {
      alert(nombre + ' ' + apellido + ', tu valoración es aceptable');
    } else if (nota >= 4 && nota < 5) {
      alert(nombre + ' ' + apellido + ', tu valoración es sobresaliente');
    } else if (nota == 5) {
      alert(nombre + ' ' + apellido + ', tu valoración es excelente');
    } else {
      alert(nombre + ' ' + apellido + ', por favor ingresa una calificación válida')
    }
    
    e.preventDefault();
  });


  //Ejercicio 4
  //Descuentos
  $('.ej4').click(function (e) {
    var diaSemana
      , mesAno
      , descuento
      , descuentoCC;
    switch (new Date().getDay()) {
    case 0:
      diaSemana = "Domingo";
      descuento = 0;
      break;
    case 1:
      diaSemana = "Lunes";
      descuento = 0.1;
      break;
    case 2:
      diaSemana = "Martes";
      descuento = 0.3;
      break;
    case 3:
      diaSemana = "Miércoles";
      descuento = 0.5;
      break;
    case 4:
      diaSemana = "Jueves";
      descuento = 0.2;
      break;
    case 5:
      diaSemana = "Viernes";
      descuento = 0;
      break;
    case 6:
      diaSemana = "Sábado";
      descuento = 0;
      break;
    };
    switch (new Date().getMonth()) {
    case 0:
      mesAno = "Enero";
      descuentoCC = 0.4;
      break;
    case 1:
      mesAno = "Febrero";
      descuentoCC = 0.5;
      break;
    case 2:
      mesAno = "Marzo";
      descuentoCC = 0.4;
      break;
    case 3:
      mesAno = "Abril";
      descuentoCC = 0.3;
      break;
    case 4:
      mesAno = "Mayo";
      descuentoCC = 0.2;
      break;
    case 5:
      mesAno = "Junio";
      descuentoCC = 0;
      break;
    case 6:
      mesAno = "Julio";
      descuentoCC = 0.1;
      break;
    case 7:
      mesAno = "Agosto";
      descuentoCC = 0.3;
      break;
    case 8:
      mesAno = "Septiembre";
      descuentoCC = 0.35;
      break;
    case 9:
      mesAno = "Octubre";
      descuentoCC = 0.5;
      break;
    case 10:
      mesAno = "Noviembre";
      descuentoCC = 0.2;
      break;
    case 11:
      mesAno = "Diciembre";
      descuentoCC = 0;
      break;
    };

    alert(diaSemana + ' Descuento en cineCapital: ' + descuento * 100 + '%\n' + mesAno + ' descuento en Centro Comercial: ' + descuentoCC * 100 + '%');
    e.preventDefault();
  });

  //Ejercicio 5.1
  //Numeros pares hasta 50
  $('.ej51').click(function (e) {
    var numeroTope = parseInt(prompt('Ingrese un número tope', '50'))
      , texto = '';
    for (i = 0; i <= numeroTope; i += 2) {
      texto = texto + i + ' ';
    }
    alert(texto);
    e.preventDefault();
  });


  //Ejercicio 5.2
  //Numeros impares hasta 49
  $('.ej52').click(function (e) {
    var numeroTope = parseInt(prompt('Ingrese un número tope', '50'))
      , texto = '';
    
    for (i = 1; i <= numeroTope; i += 2) {
      texto = texto + i + ' ';
    }
    
    alert(texto);
    e.preventDefault();
  });


  //Ejercicio 5.3
  //Tabla de multiplicar
  $('.ej53').click(function (e) {
    var numero = parseInt(prompt('Ingrese número a multiplicar', '7'));
    
    var container = $('.tabla-mult tbody');
    
    $('.desarrollo-ej53').fadeIn(400);
    
    container.html('');
    
    for (i = 1; i <= 12; i++) {
      container.append('<tr><td>' + numero + '</td><td>' + i + '</td><td>' + numero * i + '</td></tr>');
    }
    
    e.preventDefault();
  });



  //Ejercicio 5.4
  //Acumulado por interés 
  $('.ej54').click(function (e) {
    var inversion = parseInt(prompt('Ingrese monto de inversión inicial en pesos', '1000000'))
      , periodo = parseInt(prompt('Ingrese término del ahorro en años', '5'))
      , interes = parseFloat(prompt('Ingrese interés anual en unidades porcentuales', '6.0'))
      , acumulado = inversion;

    for (i = 1; i <= periodo; i++) {
      acumulado += inversion * (interes / 100);
    }
    alert('Al cabo de ' + periodo + ' años, El acumulado es $' + acumulado);
    e.preventDefault();
  });

  //Ejercicio 6
  //Tutores S.A.
  $('.ej6').click(function (e) {
    var antiguedad = parseInt(prompt('Ingrese años de antigüedad', '1'));
    if (antiguedad < 2) {
      alert('No tiene bono');
    } else if (antiguedad >= 2 && antiguedad < 3) {
      alert('Tiene bono de $100.000');
    } else if (antiguedad >= 3 && antiguedad < 4) {
      alert('Tiene bono de $200.000');
    } else if (antiguedad >= 4 && antiguedad < 5) {
      alert('Tiene bono de $500.000');
    } else if (antiguedad >= 5) {
      alert('Tiene bono de $700.000');
    }
    e.preventDefault();
  });

  //Ejercicio 71
  //Do While
  $('.ej71').click(function (e) {
    var numTope = parseInt(prompt('Ingrese el tope', '50'))
      , i = 0
      , text = '';
    do {
      text += i + ' ';
      i += 2;
    }
    while (i <= numTope);
    alert(text);
    e.preventDefault();
  });

  //Ejercicio 72
  //Do While - Impares
  $('.ej72').click(function (e) {
    var numTope = parseInt(prompt('Ingrese el tope', '50'))
      , i = 1
      , text = ''
      , container = $('.noShow.ej72');
    container.html('');
    container.append('<h4>Los números impares hasta el ' + numTope + '</h4>');
    do {
      container.append('<span class="numImpar">' + i + '</span>');
      i += 2;
    }
    while (i <= numTope);
    e.preventDefault();
  });

  //Ejercicio 7.3
  //Do while tabla multiplicar
  $('.ej73').click(function (e) {
    var multiplicando = parseInt(prompt('Ingrese el número', '7'))
      , i = 1
      , text = ''
      , container = $('.noShow.ej73');
    container.html('');
    container.append('<table class="tabla-mult"><thead><tr><th>Multiplicando</th><th>Multiplicador</th><th>Resultado</th></tr></thead><tbody></tbody></table>');
    do {
      container.find('.tabla-mult').append('<tr><td>' + multiplicando + '</td><td>' + i + '</td><td>' + (i * multiplicando) + '</td></tr>');
      i += 1;
    }
    while (i <= 12);
    e.preventDefault();
  });


  //Ejercicio 8
  //
  $('.ej8').click(function (e) {
    /*La siguiente línea contiene un error, 
    ya que el metodo prompt retorna un string, 
    la función retornará un error, ya que los
    strings no pueden someterse a operaciones 
    matemáticas. Hay que hacer type casting a 
    integer*/

    //var numero = prompt('Introduce un número entero');
    //error de tipo de dato
    var numero = parseInt(prompt('Introduce un número entero'));


    //Esta línea ejecuta la función parImpar 
    //pasando el valor de la variable numero como parámetro
    var resultado = parImpar(numero);

    //Esta línea muestra el resultado de la 
    //ejecución en una ventana flotante
    alert('El número ' + numero + ' es ' + resultado);

    /*Aquí se define la función parImpar, que toma un parámetro 
    y hace la verificación de si es o no par */
    e.preventDefault();
  });




  var contador = 0;


  $('.ej11').click(function (e) {
    if (parImpar(contador) == 'par') {
      alert(info("OVNI = OBJETO VOLADOR NO IDENTIFICADO"));
    } else if (contador % 3 == 0) {
      alert(info("En un lugar de la mancha..."));
    } else {
      alert(info(prompt('Escriba una frase para verificar')));
    }

    contador += 1;

    e.preventDefault();
  });



  $('.ej12').click(function (e) {
    var palabra = prompt('Ingrese una palabra o frase palíndroma');
    if (palindromo(palabra)) {
      alert('La cadena "' + palabra + '" ES PALINDROMA');
    } else {
      alert('La cadena "' + palabra + '" NO es palíndroma, intente de nuevo');
    }
    e.preventDefault();
  });


  //(nombre, peso, estatura, sexo, edad)
  $('.ej13').click(function (e) {
    var persona = {
      nombre: 'Jlixerkun'
      , peso: 85
      , estatura: 1.70
      , sexo: 'masculino'
      , edad: 35
    }
    persona.edad = 36;
    
    alerta();

    function alerta() {
      alert('La persona se llama ' + persona.nombre + '\npeso: ' + persona.peso + ' kg.\nestatura: ' + persona.estatura + ' metros\nsexo: ' + persona.sexo + '\nedad: ' + persona.edad + ' años');
    }

//    persona.nombre = prompt('Escriba el nuevo nombre');

//    alerta();

    var miPapa = new Persona("Eduardo", 85, 1.75, "masculino", 7);

    miPapa.edad = 65;
    
    alert(miPapa.nombre);
//    alert(miPapa.puedeBever);
    
    if (miPapa.puedeBever()) {
      alert(miPapa.nombre + ' puede bever porque tiene ' + miPapa.edad + ' años!!\nPuede bever hace ' + (miPapa.edad - 18) +' años');
    } else {
      alert(miPapa.nombre + ' no puede bever sino hasta dentro de ' + (18 - miPapa.edad) + ' años!!');
    }

    e.preventDefault();
  });


  //Funciones útiles
  function parImpar(numero) {
    if (numero % 2 == 0) { // Lasentencia if(...) es el inicio de
      return 'par'; // una estructura de control
    } else {
      return 'impar';
    }
  }

  function info(cadena) {
    var resultado = 'La cadena "' + cadena + '" ';
    //Comprobar mayúsculas/minúsculas
    if (cadena == cadena.toUpperCase()) {
      resultado += 'está formada sólo por mayúsculas';
    } else if (cadena == cadena.toLowerCase()) {
      resultado += 'está formada sólo por minúsculas';
    } else {
      resultado += 'está formada por mayúsculas y minúsculas';
    }
    return resultado;
  }

  function palindromo(cadena) {
    //Pasar a minusculas la cadena
    var cadenaOriginal = cadena.toLowerCase();

    //eliminar los espacios en blanco
    var cadenaSinEspacios = cadenaOriginal.replace(/ /g, '');

    //convertir la cadena en array
    var letras = cadenaSinEspacios.split('');
    var letrasReves = cadenaSinEspacios.split('').reverse();
    
    var iguales = true;
    for (i = 0; i <= (letras.length) / 2; i++) {
      if (letras[i] != letrasReves[i]) {
        iguales = false;
        break;
      }
    }
    if (iguales) {
      return true;
    } else {
      return false;
    }
  } 
  
  function Persona(nombre, peso, estatura, sexo, edad) {
    this.nombre = nombre;
    this.peso = peso;
    this.estatura = estatura;
    this.sexo = sexo;
    this.edad = edad;
    this.puedeBever = function(){
      return (this.edad >= 18);
    };
  }



});