window.onload = ompleArray;
//Array que conté totes les comarques i el seu "id de path"
var arrayComarques = [];
var arrayRandom41 = [];
var contadorPositiu = 0;
var contadorNegatiu = 0;
var puntPerEncert = 2.4490243902439024390243902439024;
var suma = 0;
var pathComarcaCapital;
var capitalFalsa1;
var capitalFalsa2;
var arrayRandom3 = [];
var arrayBo = [];
var cont = 0;

function comprovarComarca(elementClickat) {

    var Capital = pathComarcaCapital[2].toLowerCase();
    var entradaUsuari = elementClickat.toLowerCase();

    //PINTA AMB COLOR VERD O VERMELL SEGONS SI ÉS CORRECTE O NO
    if (Capital == entradaUsuari) {
        document.getElementById("map").contentDocument.getElementById(pathComarcaCapital[0]).setAttribute('style', "fill: #12E700");
        contadorPositiu++;
        $('#informacioResultat').html('<div class="alert alert-success"> <b> Correcte </b> </div >');
    }
    else {
        document.getElementById("map").contentDocument.getElementById(pathComarcaCapital[0]).setAttribute('style', "fill: #E71000");
        contadorNegatiu++;
        $('#informacioResultat').html('<div class="alert alert-danger">  Incorrecte, la resposta correcta era: <b>' + pathComarcaCapital[2] + '</b> </div >');

    }
    $('#marcador_encerts').html("<h4> " + contadorPositiu + "/" + (contadorNegatiu + contadorPositiu) + " </h4 > ")
    suma = suma + puntPerEncert;
    document.getElementById("barraProgress1").setAttribute('style', "width: " + suma + "%")
    document.getElementById("progressBarra").innerHTML = suma.toFixed(0) + "%";

    pathComarcaCapital = obtenirComarca();
}

function obtenirComarca() {
    var llargadaArray = arrayComarques.length;
    //Omplim l'array random 42 amb les comarques i capitals.
    
    //Creem un random
    if (llargadaArray > 0) {
        var random = Math.floor(Math.random() * llargadaArray);

        //Obtenim una comarca i el seu ID (path)
        var splitted = arrayComarques[random].split(";");

        capitalFalsa1 = obtenirRandom();
        capitalFalsa2 = obtenirRandom();

        while ((splitted[2] == capitalFalsa1) || (splitted[2] == capitalFalsa2) || (capitalFalsa2 == capitalFalsa1)) { randoms();}

        //Pintem la comarca obtenida pel random al HTML perque l'usuari escrigui la capital
            document.getElementById("h3Comarca").innerHTML = "<h4>Selecciona la capital de la comarca: </h4>" + '<div class="div_blanc"><h4 id="h4style">' + splitted[1] + "</h4></div>";
            document.getElementById("map").contentDocument.getElementById(splitted[0]).setAttribute('style', "fill: #ff7700");
            arrayComarques.splice(random, 1);

            arrayBo = crearArrayRandom(splitted[2], capitalFalsa1, capitalFalsa2);

            $("#button1").html(arrayBo[0]);
            
            $("#button2").html(arrayBo[1]);
            
            $("#button3").html(arrayBo[2]);


            if (cont == 0) {
                addListeners();
                cont = 1;
            }


            var capital = splitted[2];

            return splitted;
        

    }

    else {
        var notaFinal = (contadorPositiu * 10) / 41;
        notaFinal = notaFinal.toFixed(2);
        $('#notaFinal').html("<b>Has encertat " + contadorPositiu + ' de 41, la teva nota és: <span class="badge badge-secondary" >' + notaFinal + '</span ></b>');
        var punto = notaFinal.replace(".", ",");
        $("#notaActivitat1").val(punto);
        $('#modalFinal').modal('show');
        return;
    }
}

function ompleArray() {
    for (var i = 1; i < 42; i++) {
        var IString = i.toString();

        var comarca = document.getElementById("map").contentDocument.getElementById("path" + IString).dataset.comarca;
        var capital = document.getElementById("map").contentDocument.getElementById("path" + IString).dataset.capital;

        arrayComarques.push("path" + IString + ";" + comarca + ";" + capital);
    }
    ompleArrayRandom();
}

function obtenirRandom() {
    llargadaArray1 = arrayRandom41.length;
    console.log(llargadaArray1);
    var random = Math.floor(Math.random() * llargadaArray1);

    //L'esplit conté el path, la comarca i la capital separats per ;
    var splitted = arrayRandom41[random].split(";");

    return splitted[2];
}

function randoms() {
    capitalFalsa1 = obtenirRandom();
    console.log(capitalFalsa1);
    capitalFalsa2 = obtenirRandom();
    console.log(capitalFalsa2);
}

function crearArrayRandom(capital1, capital2, capital3) {

    var arrayCapitals = [capital1, capital2, capital3];
    console.log(arrayCapitals);
    var llargadaArray3 = arrayCapitals.length;
    var arrayRandomD = [];

    for (var i = llargadaArray3; i > 0; i--) {

        var random = Math.floor(Math.random() * i);

        //alert(random);

        arrayRandomD.push(arrayCapitals[random]);

        arrayCapitals.splice(random, 1);
    }   
    return arrayRandomD;
}

function ompleArrayRandom() {

    var llargadaArray2 = arrayComarques.length;
    for (var i = 0; i < llargadaArray2; i++) {
        arrayRandom41.push(arrayComarques[i]);
    }
    
    pathComarcaCapital = obtenirComarca();
}
addListeners;
function addListeners() {

    document.getElementById("button1").addEventListener('click', function (e) {
        comprovarComarca($("#button1").text());
    });

    document.getElementById("button2").addEventListener('click', function (e) {
        comprovarComarca($("#button2").text());
    });

    document.getElementById("button3").addEventListener('click', function (e) {
        comprovarComarca($("#button3").text());
    });
}