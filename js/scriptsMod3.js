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

    alert(diaSemana + ' Descuento en cineCapital: ' + descuento * 100 + '%\n' + mesAno + ' descuento en Centro Comercial:' + descuentoCC * 100 + '%');
    e.preventDefault();
  });

  //Ejercicio 5.1
  //Numeros pares hasta 50
  $('.ej51').click(function (e) {
    var numeroTope = parseInt(prompt('Ingrese un número tope', '50'))
      , texto = '';
    for (i = 0; i <= numeroTope; i += 2) {
      texto = texto + '' + i + ' ';
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
      texto = texto + '' + i + ' ';
    }
    alert(texto);
    e.preventDefault();
  });


  //Ejercicio 5.3
  //Tabla de multipllicar
  $('.ej53').click(function (e) {
    var numero = parseInt(prompt('Ingrese número a multiplicar', '7'));
    var container = $('.tabla-mult tbody');
    $('.desarrollo-ej53').fadeIn(200);
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
    if(antiguedad < 2) {
      alert ('No tiene bono');
    } else if( antiguedad >= 2 && antiguedad <3) {
      alert ('Tiene bono de $100.000');      
    } else if ( antiguedad >= 3 && antiguedad <4) {
      alert ('Tiene bono de $200.000');      
    } else if ( antiguedad >= 4 && antiguedad <5) {
      alert ('Tiene bono de $500.000');      
    } else if ( antiguedad >=5) {
      alert ('Tiene bono de $700.000');      
    }
    e.preventDefault();
  });


})