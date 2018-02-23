//Array que conté totes les comarques i el seu "id de path"
var arrayComarques = [];
var contadorPositiu = 0;
var contadorNegatiu = 0;
var puntPerEncert = 2.4490243902439024390243902439024;
var suma = 0;
var pathComarcaCapital;

function comprovarComarca() {

    var Capital = pathComarcaCapital[2].toLowerCase();
    var entradaUsuari = document.getElementById("capitalUsuari").value.toLowerCase();
    console.log(entradaUsuari + " " + Capital);

    document.getElementById("capitalUsuari").value = "";

    //PINTA AMB COLOR VERD O VERMELL SEGONS SI ÉS CORRECTE O NO
    if (Capital == entradaUsuari) {
        document.getElementById("map").contentDocument.getElementById(pathComarcaCapital[0]).setAttribute('style', "fill: #12E700");
        contadorPositiu++;
        console.log("hola");
    }
    else {
        document.getElementById("map").contentDocument.getElementById(pathComarcaCapital[0]).setAttribute('style', "fill: #E71000");
        contadorNegatiu++;
        console.log("adeu");
    }

    pathComarcaCapital = obtenirComarca();
}

function obtenirComarca() {
    var llargadaArray = arrayComarques.length;
    //Creem un random
    if (llargadaArray > 0) {
        var random = Math.floor(Math.random() * llargadaArray);

        //Obtenim una comarca i el seu ID (path)
        var splitted = arrayComarques[random].split(";");

        //Pintem la comarca obtenida pel random al HTML perque l'usuari escrigui la capital
        document.getElementById("h3Comarca").innerHTML = "<h4>Escriu la capital de la comarca: </h4>" + '<div class="div_blanc"><h4 id="h4style">' + splitted[1] + "</h4></div>";
        document.getElementById("map").contentDocument.getElementById(splitted[0]).setAttribute('style', "fill: #ff7700");
        arrayComarques.splice(random, 1);
        
        var capital = splitted[2];

        return splitted;
    }

    else {
        var notaFinal = (contadorPositiu * 10) / 41;
        notaFinal = notaFinal.toFixed(2);
        //$('#notaFinal').html("<b>Has encertat " + contadorPositiu + ' de 41, la teva nota és: <span class="badge badge-secondary" >' + notaFinal + '</span ></b>');
        //$('#modalFinal').modal('show');
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
    pathComarcaCapital = obtenirComarca();
}

function prova() {
    document.getElementById("capitalUsuari").addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            comprovarComarca();
        }
    });
}


window.onload = ompleArray, prova;